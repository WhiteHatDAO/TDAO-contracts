pragma solidity >=0.8.0 <0.9.0;
//SPDX-License-Identifier: MIT

import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

// https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol

contract TalentDaoToken is Ownable, ERC20Burnable {

    address public treasury;

    constructor(address _owner) public ERC20("Talent DAO Token", "TDAO") ERC20Burnable() {
      _transferOwnership(_owner);
      _mint(treasury, 100000000 ether);
    }

    /// @dev See {ERC20-_beforeTokenTransfer}
    function _beforeTokenTransfer(address from, address to, uint256 amount)
        internal
        virtual
        override
    {
        super._beforeTokenTransfer(from, to, amount);

        // todo: what do we need to do before a transfer takes place?
        
    }

    function burnTokens(unt256 amount) public {
      _burn(amount);
    }

    function mintTokens(uint256 amount, address to) public onlyOwner {
      _mint(to, amount);
    }

}
