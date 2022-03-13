pragma solidity >=0.8.0 <0.9.0;
//SPDX-License-Identifier: MIT

import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

import "./AuthorEntity.sol";
import "./ArticleEntity.sol";

/// @dev TDAO token interface
interface ITDAOToken {
    function mintTokens(uint256 amount, address to) external;
    function transfer ( address recipient, uint256 amount ) external returns ( bool );
    function transferFrom ( address sender, address recipient, uint256 amount ) external returns ( bool );
    function approve ( address spender, uint256 amount ) external returns ( bool );
    function burnTokens(uint256 amount, address from) external;
    function balanceOf ( address account ) external view returns ( uint256 );
}

interface ITDAONFTToken {
    function mintNFTForArticle(address ownerAddress, address author, bytes32 arweaveHash, bytes32 profileHash, string memory metadataPtr, uint256 amount) external returns(uint256, uint256);
}

interface ITDAOMemberToken{
    function mintMembershipToken(address authorAddress, string memory metadataPtr, uint256 amount) external returns(uint256);
}

/// @title TokenRecover
/// @author jaxcoder
/// @dev Allow to recover any ERC20 sent into the contract for error
contract TokenRecover is Ownable {
    /**
     * @dev Remember that only owner can call so be careful when use on contracts generated from other contracts.
     * @param tokenAddress The token contract address
     * @param tokenAmount Number of tokens to be sent
     */
    function recoverERC20(address tokenAddress, uint256 tokenAmount) public onlyOwner {
        IERC20(tokenAddress).transfer(owner(), tokenAmount);
    }
}

/// @title Manages the Authors and Articles on-chain
/// @author jaxcoder
/// @notice 
/// @dev 
contract TalentDaoManager is Ownable, AuthorEntity, AccessControl, TokenRecover {
    using SafeERC20 for IERC20;
    using SafeMath for uint256;
    
    bytes32 public constant MANAGER_ROLE = keccak256("MANAGER_ROLE");

    address public manager;

    ITDAOToken public tDaoToken;
    address public tDaoTokenAddress;
    ITDAONFTToken public tDaoNftToken;
    ITDAOMemberToken public tDaoMemberToken;

    event ManagerRemoved(address indexed oldManager);
    event ManagerAdded(address indexed newManager);
   
    constructor(address _manager, address _owner, address _TDAOToken, address _TDAONFTToken, address _TDAOMemberToken) public {
        manager = _manager;
        _setupRole(MANAGER_ROLE, _manager);
        tDaoToken = ITDAOToken(_TDAOToken);
        tDaoTokenAddress = _TDAOToken;
        tDaoNftToken = ITDAONFTToken(_TDAONFTToken);
        tDaoMemberToken = ITDAOMemberToken(_TDAOMemberToken);
        transferOwnership(_owner);
    }

    function mintMemberToken (address to, string memory metadataPtr, uint256 amount) public {
        tDaoMemberToken.mintMembershipToken(to, metadataPtr, amount);
    }
    
    
    /// @dev transfer TDAO tokens
    /// @param to the recipient of the tokens
    function _transferTokens (address to, uint256 amount) internal {
        tDaoToken.transfer(to, amount);
    }
    
    /// @dev transfer TDAO tokens
    /// @param from the sender(author) of the tokens
    function transferTokens (address from, uint256 amount) public onlyRole(MANAGER_ROLE) {
        tDaoToken.transferFrom(from, address(this), amount);
    }

    /// @dev admin function to update the contract manager
    /// @param newManager the address of the new manager
    function updateManger (address newManager) public onlyOwner {
        revokeRole(MANAGER_ROLE, manager);
        emit ManagerRemoved(manager);
        manager = newManager;
        grantRole(MANAGER_ROLE, manager);
        emit ManagerAdded(manager);
    }


    function mintArticleNFT(address author, bytes32 arweaveHash, bytes32 profileHash, string memory metadataPtr, uint256 amount)
        public
        returns (uint256, uint256)
    {
        (uint256 newItemId, uint256 authorId) = tDaoNftToken.mintNFTForArticle(msg.sender, author, arweaveHash, profileHash, metadataPtr, amount);

        return (newItemId, authorId);
    }


    function getAuthor(address authorAddress)
        public
        view
        returns(address, uint256, bytes32)
    {
        return (authors[authorAddress].authorAddress, authors[authorAddress].id, authors[authorAddress].arweaveProfileHash);
    }


    function addAuthor(address author, bytes32 arweaveHash, string memory metadataPtr)
        public 
        returns(uint256 authorId)
    {
        (authorId) = addAuthor(author, arweaveHash, metadataPtr);

        return authorId;
    }

    function tipAuthor(address author, uint256 amount) public {
        console.log(amount);
        require(IERC20(tDaoTokenAddress).balanceOf(msg.sender) >= amount, "You don't have enough TDAO tokens");
        IERC20(tDaoTokenAddress).transferFrom(msg.sender, author, amount);
    }

    
}