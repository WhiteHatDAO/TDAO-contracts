pragma solidity >=0.8.0 <0.9.0;
//SPDX-License-Identifier: MIT

import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./AuthorEntity.sol";

contract TalentDaoManager is Ownable, AuthorEntity {
    address public manager;

    mapping(address => Author) public authors;
    mapping(address => Article) public articles;
   
    constructor(address _manager, address _owner) public {
        manager = _manager;
        transferOwnership(_owner);
    }

    // todo: 
    // 1. Add Author
    // 2. Edit Author
    // 3. Add Article
    // 4. Edit Article
}