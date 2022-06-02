pragma solidity ^0.8.4;
pragma experimental ABIEncoderV2;
//SPDX-License-Identifier: GPL

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract rTalentToken is ERC20, Ownable, AccessControl, ERC20Burnable {
    using SafeERC20 for IERC20;

    // Roles
    bytes32 public constant OPERATOR_ROLE = keccak256("OPERATOR_ROLE");
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant DAO_ROLE = keccak256("DAO_ROLE");
    bytes32 public constant DISTRIBUTOR_ROLE = keccak256("DISTRIBUTOR_ROLE");

    // Mappings
    mapping(address => uint256) private balances;
    mapping(address => mapping(address => uint256)) public allowances;

    // Errors
    error ZERO_ADDRESS();

    // Modifiers
    modifier isPermittedMinter() {
        require(
            hasRole(MINTER_ROLE, msg.sender) || owner() == msg.sender,
            "Not an approved minter"
        );
        _;
    }

    modifier isPermittedDao() {
        require(
            hasRole(DAO_ROLE, msg.sender) || owner() == msg.sender,
            "Not an approved DAO"
        );
        _;
    }

    modifier isPermittedOperator() {
        require(
            hasRole(OPERATOR_ROLE, msg.sender) || owner() == msg.sender,
            "Not an approved minter"
        );
        _;
    }

    modifier isPermittedDistributor() {
        require(
            hasRole(DISTRIBUTOR_ROLE, msg.sender) || owner() == msg.sender,
            "Not an approved distributor"
        );
        _;
    }

    modifier isAdminOrOwner() {
        require(
            hasRole(DEFAULT_ADMIN_ROLE, msg.sender) || owner() == msg.sender,
            "You can't perform admin actions"
        );
        _;
    }

    modifier hasEnoughBalance(uint256 balance, uint256 amount) {
        require(balance >= amount, "Not enough token balance");
        _;
    }

    constructor
    (
        address _owner
    )
        public
        ERC20("rTalent Reputation Token", "rTALENT")
        ERC20Burnable()
    {
        _setupRole(OPERATOR_ROLE, msg.sender);
        _setupRole(DISTRIBUTOR_ROLE, msg.sender);
        _setupRole(MINTER_ROLE, msg.sender);
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _mint(msg.sender, 10000000 ether);
        transferOwnership(_owner);
    }

    function setupNewAdminRole(address _newAdmin, address _oldAdmin)
        public
        onlyOwner
    {
        _revokeRole(DEFAULT_ADMIN_ROLE, _oldAdmin);
        _setupRole(DEFAULT_ADMIN_ROLE, _newAdmin);
    }

    function setupMinterRole(address newMinter)
        public
        onlyOwner
    {
        _setupRole(MINTER_ROLE, newMinter);
    }

    function setupOperatorRole(address _newOperator)
        public
        onlyOwner
    {
        _setupRole(OPERATOR_ROLE, _newOperator);
    }

    function setupDistributorRole(address _newDistributor)
        public
        onlyOwner
    {
        _setupRole(DISTRIBUTOR_ROLE, _newDistributor);
    }

    /**
    * @dev See {ERC20-_beforeTokenTransfer}.
    *
    * Requirements: do we want to do anything before each transfer?
    */
    function _beforeTokenTransfer(address from, address to, uint256 amount)
        internal
        virtual
        override
    {
        super._beforeTokenTransfer(from, to, amount);

        
    }

    function mintTokens
    (
        address _to,
        uint256 _amount
    )
        external

    {
        if (_to == address(0)) revert ZERO_ADDRESS();
        balances[_to] += _amount;

        _mint(_to, _amount);
    }

    function burn
    (
        uint256 _amount
    )
        public
        virtual
        override
    {
        if (msg.sender == address(0)) revert ZERO_ADDRESS();
        balances[msg.sender] -= _amount;

        _burn(msg.sender, _amount);
    }

    function burnFrom
    (
        uint256 _amount,
        address _from
    )
        external
    {
        if (_from == address(0)) revert ZERO_ADDRESS();
        balances[_from] -= _amount;

        _burn(_from, _amount);
    }
}