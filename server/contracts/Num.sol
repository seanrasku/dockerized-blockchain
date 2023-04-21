//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract num {
    uint256 public num;

    constructor(uint256 n) public {
        num = n;
    }

    function getNum() public view returns (uint256) {
        return num;
    }
}
