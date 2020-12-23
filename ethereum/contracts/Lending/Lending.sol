pragma solidity ^0.6.2;

import "@openzeppelin/contracts/access/Ownable.sol";
import "../Token/ObjectNFT.sol";
import "../Token/VUSDT.sol";

contract Lending is Ownable {
    using SafeMath for uint256;

    ObjectNFT public ONFT;
    VUSDT public USDT;

    uint256 public baseValue;
    uint256 public levelMultiplier;
    uint256 public attackMultiplier;
    uint256 public defenseMultiplier;
    uint256 public healMultiplier;
    uint256 public manaMultiplier;

    mapping ( address => uint256 ) public fundingRate;

    mapping ( uint256 => lendingStruct ) public LendingBook;

    struct lendingStruct {
        uint256 startBlock;
        uint256 endTime;
        address Lender;
        address Borrower;
        uint256 valueAtPoint;
        uint256 LendAmount;
        uint256 InterestRate;
    }

    modifier isValidRate( uint256 _rate){
        require( ( _rate >= 0 ) && ( _rate <100 ));
        _;
    }

    modifier isValidRepay (uint256 _tokenID){
        require(
            ( LendingBook[_tokenID].Borrower == msg.sender ) &&
            ( LendingBook[_tokenID].startBlock >= block.number ) &&
            ( LendingBook[_tokenID].endTime <= block.number )
        );
        _;
    }

    modifier isForfiet (uint256 _tokenID){
        require(
            ( LendingBook[_tokenID].Lender == msg.sender ) &&
            ( LendingBook[_tokenID].endTime >= block.number )
        );
        _;
    }

    event setMultipler( uint8 indexed _type , uint256 _multipler );
    event setLendingRate( address indexed _lender , uint256 _rate , uint256 _limit );
    event mortgageEvent ( address _lender , address _borrorer , uint256 tokenID , uint256 _startBlock , uint256 _endblock , uint256 _tokenValue , uint256 _lendvalue , uint256 _rate );
    event eventrepayment( address _borrorer , address _lender , uint256 _tokenid , uint256 _repaymentAMt );
    event eventForfiet( uint256 _tokenID , address _lender );

    constructor( address _ONFTAddr , address _USDTAddr )
        Ownable()
        public
    {
        ONFT = ObjectNFT(_ONFTAddr);
        USDT = VUSDT(_USDTAddr);
    }

    function setBase ( uint256 _base ) onlyOwner public returns ( bool ){
        baseValue = _base;
        emit setMultipler( 0 , _base);
        return true;
    }

    function setLevelMultipler ( uint256 _multipler ) onlyOwner public returns ( bool ){
        levelMultiplier = _multipler;
        emit setMultipler( 1 , _multipler );
        return true;
    }

    function setattackMultiplier ( uint256 _multipler ) onlyOwner public returns ( bool ){
        attackMultiplier = _multipler;
        emit setMultipler( 2 , _multipler );
        return true;
    }

    function setdefenseMultiplier ( uint256 _multipler ) onlyOwner public returns ( bool ){
        defenseMultiplier = _multipler;
        emit setMultipler( 3 , _multipler );
        return true;
    }

    function sethealMultiplier ( uint256 _multipler ) onlyOwner public returns ( bool ){
        healMultiplier = _multipler;
        emit setMultipler( 4 , _multipler );
        return true;
    }

    function setmanaMultiplier ( uint256 _multipler ) onlyOwner public returns ( bool ){
        manaMultiplier = _multipler;
        emit setMultipler( 5 , _multipler );
        return true;
    }

    function calculateValue ( uint256 _objectID ) public returns ( uint256 _value ){
        (  ,  , uint256 level , uint256 attack , uint256 defense , uint256 heal ,  uint256 mana) = ONFT.PlayersMap(_objectID);
        uint256 netMul;
        netMul = level.mul(levelMultiplier).add(netMul);
        netMul = attack.mul(attackMultiplier).add(netMul);
        netMul = defense.mul(defenseMultiplier).add(netMul);
        netMul = heal.mul(healMultiplier).add(netMul);
        netMul = mana.mul(manaMultiplier).add(netMul);
        netMul = netMul.mul(baseValue);
        netMul = netMul.div(6);
        return netMul;
    }

    function fundLiquidty ( uint256 rate , uint256 limit ) isValidRate( rate ) public returns ( bool ) {
        address(USDT).delegatecall(abi.encodeWithSignature("approve(address,uint256)", address(this), limit));
        fundingRate[msg.sender] = rate;
        emit setLendingRate( msg.sender , rate , limit );
        return true;
    }

    function mortgageNFT( uint256 _tokenID  , address _Lender ) public returns ( bool ){
        address(ONFT).delegatecall(abi.encodeWithSignature("approve(address,uint256)", address(this), _tokenID));
        uint256 tokenValue = calculateValue( _tokenID);
        uint256 lendValue = calculateLendValue(tokenValue , fundingRate[_Lender]);
        ONFT.transferFrom( msg.sender , address( this ) , _tokenID );
        USDT.transferFrom( _Lender , msg.sender , lendValue );
        LendingBook[_tokenID] = lendingStruct(block.number , block.number.add(10000) , _Lender , msg.sender , tokenValue , lendValue , fundingRate[_Lender] );
        emit mortgageEvent( _Lender , msg.sender , _tokenID , block.number , block.number.add(10000) , tokenValue , lendValue , fundingRate[_Lender]);
        return true;
    }

    function calculateLendValue( uint256 _tokenValue , uint256 _rate ) public view returns ( uint256 ) {
        return _tokenValue.mul(10000).div(_rate.add(10000));
    }

    function calculateInterest( uint256 _tokenID , uint256 _paymentblock ) public view returns ( uint256 ) {
        uint256 diffBlock = _paymentblock.sub(LendingBook[_tokenID].startBlock);
        uint256 interest = LendingBook[_tokenID].valueAtPoint.sub(LendingBook[_tokenID].LendAmount);
        uint256 netBlock = LendingBook[_tokenID].endTime.sub(LendingBook[_tokenID].startBlock);
        return interest.mul(diffBlock).div(netBlock);
    }

    function repay( uint256 _tokenID ) isValidRepay(_tokenID) public returns ( bool ) {
        uint256 interest = calculateInterest( _tokenID , block.number );
        uint256 repayAmt = LendingBook[_tokenID].LendAmount.add(interest);
        address(USDT).delegatecall(abi.encodeWithSignature("transfer(address,uint256)", LendingBook[_tokenID].Lender , repayAmt));
        ONFT.transfer( msg.sender , _tokenID);
        emit eventrepayment ( msg.sender , LendingBook[_tokenID].Lender , _tokenID , repayAmt );
        return true;
    }

    function forfiet( uint256 _tokenID ) isForfiet(_tokenID) public returns ( bool ){
        ONFT.transfer( msg.sender , _tokenID);
        emit eventForfiet( _tokenID , msg.sender );
        return true;
    }

}
