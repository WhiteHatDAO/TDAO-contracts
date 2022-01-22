pragma solidity >=0.8.0 <0.9.0;
//SPDX-License-Identifier: MIT

import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol

contract TalentDaoToken is Ownable, ERC20 {

  address public treasury;

  constructor(address _owner) public ERC20("Talent DAO Token", "TDAO") {
    _transferOwnership(_owner);
    _mint(treasury, 100000000 ether);
  }

}
