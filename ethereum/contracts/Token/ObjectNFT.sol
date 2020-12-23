pragma solidity ^0.6.2;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ObjectNFT is Ownable , ERC721 {
    using Counters for Counters.Counter;

    Counters.Counter private tokenId;

    address public gameMaster;

    mapping ( uint256 => PlayersObject ) public PlayersMap;

    struct PlayersObject {
        uint256 objectID;
        uint256 gameID;
        uint256 level;
        uint256 attack;
        uint256 defense;
        uint256 heal;
        uint256 mana;
    }

    modifier isGameMaster (){
        require(msg.sender == gameMaster);
        _;
    }

    constructor( )
        public
        Ownable()
        ERC721("Game Objects NFT Token", "O-NFT")
    {
        gameMaster = msg.sender;
    }

    function changeGameMaster( address _addr )
        public
        onlyOwner
        returns ( bool )
    {
        gameMaster = _addr;
        return true;
    }

    function mint(  uint256 objectID , uint256 gameID , uint256 level , uint256 attack , uint256 defense , uint256 heal ,  uint256 mana , address _owner )
        public
        onlyOwner
        returns ( bool )
    {
        uint256 TId = tokenId.current();
        PlayersMap[TId] = PlayersObject(objectID , gameID , level, attack , defense , heal , mana );
        _safeMint( _owner , TId);
        tokenId.increment();
        return true;
    }

    function transfer (address _to , uint256 _tokenID ) public returns ( bool ){
        _transfer( msg.sender , _to , _tokenID );
        return true;
    }


    function updateLevel( uint256 id , uint256 updatedValue )
        public
        isGameMaster
        returns ( bool )
    {
        PlayersMap[id].level = updatedValue;
        return true;
    }

    function updateAttack( uint256 id , uint256 updatedValue )
        public
        isGameMaster
        returns ( bool )
    {
        PlayersMap[id].attack = updatedValue;
        return true;
    }

    function updateDefense( uint256 id , uint256 updatedValue )
        public
        isGameMaster
        returns ( bool )
    {
        PlayersMap[id].defense = updatedValue;
        return true;
    }

    function updateHeal( uint256 id , uint256 updatedValue )
        public
        isGameMaster
        returns ( bool )
    {
        PlayersMap[id].heal = updatedValue;
        return true;
    }

    function updateMana( uint256 id , uint256 updatedValue )
        public
        isGameMaster
        returns ( bool )
    {
        PlayersMap[id].mana = updatedValue;
        return true;
    }


}
