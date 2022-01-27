pragma solidity >=0.8.0 <0.9.0;
//SPDX-License-Identifier: MIT

import "hardhat/console.sol";
import "./ArticleEntity.sol";

contract AuthorEntity is ArticleEntity {

    struct Author {
        uint256 id;
        string name;
    }

    constructor() public {}
}