pragma solidity ^0.8.4;
pragma experimental ABIEncoderV2;
//SPDX-License-Identifier: GPL

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

import "./interfaces/IVETDAOToken.sol";

/// @title Talent Staking Contract
/// @author Jaxcoder
/// @notice Stake your Talent for veTalent
contract TalentStaking is Ownable {
    using SafeERC20 for IERC20;

    IVETDAOToken private veTalentToken;

    constructor
    (
        address _owner,
        address _veTalentTokenAddress
    )
        public
    {
        veTalentToken = IVETDAOToken(_veTalentTokenAddress);
        transferOwnership(_owner);
    }



}