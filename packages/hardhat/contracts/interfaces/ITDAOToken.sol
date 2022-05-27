pragma solidity >=0.8.0 <0.9.0;
//SPDX-License-Identifier: MIT

/// @dev TDAO token interface
interface ITDAOToken {
    function mintTokens(uint256 amount, address to) external;
    function transfer ( address recipient, uint256 amount ) external returns ( bool );
    function transferFrom ( address sender, address recipient, uint256 amount ) external returns ( bool );
    function approve ( address spender, uint256 amount ) external returns ( bool );
    function burnTokens(uint256 amount, address from) external;
    function balanceOf ( address account ) external view returns ( uint256 );
}