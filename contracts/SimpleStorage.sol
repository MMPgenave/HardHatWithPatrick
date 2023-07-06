// I'm a comment!
// SPDX-License-Identifier: MIT

// pragma solidity 0.8.7;

pragma solidity ^0.8.0;
// pragma solidity >=0.8.0 <0.9.0;

contract SimpleStorage {
    uint256 favoriteNumber;

    struct People {
        uint256 favoriteNumber;
        string name;
    }
    // uint256[] public anArray;
    People[] public peoples;

    mapping(string => uint256) public nameToFavoriteNumber;
    
    event Logging(uint256 indexed oldNumber,uint256 indexed newNumber,uint256 sum,address sender);

    function store(uint256 _favoriteNumber) public {
        emit Logging(favoriteNumber, _favoriteNumber, favoriteNumber+_favoriteNumber, msg.sender);
        favoriteNumber = _favoriteNumber;
    }

    function retrieve() public view returns (uint256) {
        return favoriteNumber;
    }

    function addPerson(string memory _name, uint256 _favoriteNumber) public {
        peoples.push(People(_favoriteNumber, _name));
        nameToFavoriteNumber[_name] = _favoriteNumber;
    }
}

