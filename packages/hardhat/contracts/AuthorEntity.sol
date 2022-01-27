pragma solidity >=0.8.0 <0.9.0;
//SPDX-License-Identifier: MIT

import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./ArticleEntity.sol";

contract AuthorEntity is ArticleEntity {
    using Counters for Counters.Counter;


    Counters.Counter public _authorIds;

    struct Author {
        uint256 id;
        string name;
    }

    Author[] authorList;

    mapping(address => Author) public authors;

    constructor() public {}

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
}