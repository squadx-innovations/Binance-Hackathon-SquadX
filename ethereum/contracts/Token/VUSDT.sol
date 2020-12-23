pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract VUSDT is ERC20 , Ownable {
    using SafeMath for uint256;

    constructor(  )
        public
        Ownable()
        ERC20("Virtual USDT", "V-USDT")
    {
    }

    function mint(address _to , uint256 _amt)
        onlyOwner
        public
        returns ( bool )
    {
        _mint(_to,_amt);
        return true;
    }

    function burn(address _from , uint256 _amt)
        onlyOwner
        public
        returns ( bool )
    {
        _burn(_from,_amt);
        return true;
    }

}
