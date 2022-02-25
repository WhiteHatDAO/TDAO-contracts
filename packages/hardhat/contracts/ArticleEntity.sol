pragma solidity >=0.8.0 <0.9.0;
//SPDX-License-Identifier: MIT

import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract ArticleEntity {
    using Counters for Counters.Counter;

    Counters.Counter public _articleIds;

    struct Article {
        uint256 id;
        address author; // the address of the author
        string metadataPtr; // token uri to metadata
        uint256 tokenId; // the token id representing the authors article
        uint256 paid; // the amount paid for the article to be saved on the system
    }

    Article[] articleList;

    mapping(bytes32 => Article) public articles;

    constructor() public {}

    /// @dev add a new article on-chain
    /// @param authorAddress the address of the author
    /// @param arweaveHash the arweave hash in bytes32
    function addArticle(address authorAddress, bytes32 arweaveHash) public returns (uint256) {
        _articleIds.increment();
        uint256 id = _articleIds.current();
        Article storage article = articles[arweaveHash];
        article.id = id;

        articleList.push(article);

        return id;
    }
    
    /// @dev edit an article on-chain
    /// @param authorAddress the address of the author
    /// @param arweaveHash the id of the article
    function updateArticle(address authorAddress, bytes32 arweaveHash) public {
        Article storage article = articles[arweaveHash];
        // now edit...
    }


    function getArticle () public returns(Article memory) {

    }
}