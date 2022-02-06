pragma solidity 0.8.11;
contract HelloworldPermanent
{
    string public message;
    constructor( string memory _message )
    {
        message = _message;
    }
}