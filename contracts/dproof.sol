pragma solidity >0.6.99 <0.8.0;

contract Obrazac{

    /*
        Kreiranje klase Obrazac 
    */
    
    address payable public owner; 
    address payable public admin;
    string prebivaliste;
    string oib;
    string email;
    uint public value;

    enum State {Created, Locked, Release, Inactive}
    State public state;
    
    
    constructor() payable {
        admin = msg.sender;
        value = msg.value / 2;
        require((2* value) == msg.value, "Value has to be even");
    } 
    
    /*
    msg Objekt opisuje ko je poslao transakciju, i detalje transakcije
    globalna je varijabla i moze se pozivati pri svakoj novoj instanci ili pozivanju funkcije
    
    */
    
    modifier condition(bool _condition) {
        require(_condition);
        _;
    }

    
    modifier onlyOwner(){
        require(
            msg.sender == owner,
            "Only owner can call this");
            _;
    }
    
    modifier onlyAdmin(){
        require(
            msg.sender == admin,
            "Only admin can call this");
            _;
    }
    
    modifier inState(State _state){
        require(state == _state, "Invalid state");
        _;
    }
    
    event documentAccepted();
    event documentRecieved();
    event documentBlocked();

    function blockDocument()
        public
        onlyAdmin
        inState(State.Created)
        
    {
        emit documentBlocked();
        state = State.Inactive;
        admin.transfer(address(this).balance);
    }
    
    
    function acceptDocument()
        public
        onlyAdmin
        inState(State.Created)
    {
        emit documentAccepted();
        owner = msg.sender;
        state = State.Release;
        owner.transfer(value);
    
    }

}

