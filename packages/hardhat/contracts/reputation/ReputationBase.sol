pragma solidity >=0.8.0 <0.9.0;
//SPDX-License-Identifier: MIT

import "hardhat/console.sol"; // Remove after testing is completed - JR
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

import "../libs/Timers.sol";
import "../libs/Counters.sol";
import "../libs/ABDKMath64x64.sol";

abstract contract ReputationBase is Ownable {
    using Counters for Counters.Counter;
    using ABDKMath64x64 for uint256;
    using SafeERC20 for IERC20;

    // base state variables


    // base custom errors


    // base structs


    // base events


    // base logic/functions
}