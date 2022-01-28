pragma solidity >=0.8.0 <0.9.0;
//SPDX-License-Identifier: MIT

import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

// https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol

/// @title Talent DAO Token
/// @author Jaxcoder
/// @dev A mintable/burable ERC20 token
contract TalentDaoToken is Ownable, ERC20Burnable {

    address public treasury = 0xA4ca1b15fE81F57cb2d3f686c7B13309906cd37B;

    constructor(address _owner) public ERC20("Talent DAO Token", "TALENT") ERC20Burnable() {
      _transferOwnership(_owner);
      _mint(treasury, 100000000 ether);
    }

    // /// @dev See {ERC20-_beforeTokenTransfer}
    // function _beforeTokenTransfer(address from, address to, uint256 amount)
    //     internal
    //     virtual
    //     override
    // {
    //     super._beforeTokenTransfer(from, to, amount);
    //     // todo: what do we need to do before a transfer takes place?  
    // }

    /// @dev Burn tokens from a user
    /// @param amount the amount of tokens to burn
    /// @param from the user the tokens are coming from, msg.sender could also work.
    function burnTokens(uint256 amount, address from) public {
      _burn(from, amount);
    }

    /// @dev Mint tokens to an address
    /// @param amount the amount of tokens to mint
    /// @param to the user to mint to
    function mintTokens(uint256 amount, address to) public onlyOwner {
      _mint(to, amount);
    }

}
