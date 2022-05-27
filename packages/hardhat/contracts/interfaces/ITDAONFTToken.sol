pragma solidity >=0.8.0 <0.9.0;
//SPDX-License-Identifier: MIT

interface ITDAONFTToken {
    function mintNFTForArticle(address ownerAddress, string memory metadataPtr, uint256 amount) external returns(uint256);
}
