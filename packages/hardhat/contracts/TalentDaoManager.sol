pragma solidity >=0.8.0 <0.9.0;
//SPDX-License-Identifier: MIT

import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./AuthorEntity.sol";

/// @dev TDAO token interface
interface ITDAOToken {
    function mintTokens(uint256 amount, address to) external;
    function transfer ( address recipient, uint256 amount ) external returns ( bool );
    function transferFrom ( address sender, address recipient, uint256 amount ) external returns ( bool );
    function approve ( address spender, uint256 amount ) external returns ( bool );
    function burnTokens(uint256 amount, address from) external;
    function balanceOf ( address account ) external view returns ( uint256 );
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
    using Counters for Counters.Counter;

    bytes32 public constant MANAGER_ROLE = keccak256("MANAGER_ROLE");

    address public manager;

    ITDAOToken public tDaoToken;

    Counters.Counter private _authorIds;
    Counters.Counter private _articleIds;

    mapping(address => Author) public authors;
    mapping(address => mapping(uint256 => Article)) public articles;

    event ManagerRemoved(address indexed oldManager);
    event ManagerAdded(address indexed newManager);
   
    constructor(address _manager, address _owner, address _TDAOToken) public {
        manager = _manager;
        _setupRole(MANAGER_ROLE, _manager);
        tDaoToken = ITDAOToken(_TDAOToken);
        transferOwnership(_owner);
    }

    /// @dev add a new author on-chain
    /// @param authorAddress the address of the author
    function addAuthor(address authorAddress) public {
        _authorIds.increment();
        uint256 id = _authorIds.current();
        Author storage newAuthor = authors[authorAddress];
        newAuthor.id = id;
        // ...

    }
    /// @dev edit an author on-chain
    /// @param authorAddress the address of the author
    function updateAuthor(address authorAddress) public {
        Author storage newAuthor = authors[authorAddress];
        // now edit...
    }
    
    /// @dev add a new article on-chain
    /// @param authorAddress the address of the author
    function addArticle(address authorAddress, string memory title, string memory description, string memory body) public {
        _articleIds.increment();
        uint256 id = _articleIds.current();
        Article storage article = articles[authorAddress][id];
        article.id = id;
        article.title = title;
        article.description = description;
        article.body = body;

        articleList.push(article);

        // How does the tokenomics work from here? 
        // Do they get tokens for submitting an article?
        _transferTokens(authorAddress, 100 ether);
    }
    
    /// @dev edit an article on-chain
    /// @param authorAddress the address of the author
    /// @param articleId the id of the article
    function updateArticle(address authorAddress, uint256 articleId) public {
        Article storage article = articles[authorAddress][articleId];
        // now edit...
    }

    /// @dev transfer TDAO tokens
    /// @param to the recipient of the tokens
    function _transferTokens (address to, uint256 amount) internal {
        tDaoToken.transfer(to, amount);
    }
    
    /// @dev transfer TDAO tokens
    /// @param to the recipient of the tokens
    function transferTokens (address to, uint256 amount) public onlyRole(MANAGER_ROLE) {
        tDaoToken.transfer(to, amount);
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
}