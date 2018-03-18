pragma solidity ^0.4.18;

// checked syntax in remix

contract BarterAgreement {
    Agreement[] agreements;

    struct Agreement {
      address userOne;
      address userTwo;
      string userOneService;
      string userTwoService;
      bool userOneReceivedService;
      bool userTwoReceivedService;
      bool completed;
    }

    // create a new agreement - right now we are creating the contract and passing in user one and user two as arguments. the two users, however, are touching the contract to corroborate services received.
    function newAgreement(address userOne, address userTwo, string userOneService, string userTwoService) returns (uint id) {
      id = agreements.push(Agreement(userOne, userTwo, userOneService, userTwoService, false, false, false)) - 1;
      return id;
    }
    //this might be returning correctly because we're accessing the storage vs. the interaction itself
    // we can't return a struct so we can to return each data value one by one
    function getAgreement(uint agreementID) public view returns (
      address userOne,
      address userTwo,
      string userOneService,
      string userTwoService,
      bool userOneReceivedService,
      bool userTwoReceivedService,
      bool completed
    )
    {
      Agreement storage agreement = agreements[agreementID];
        return (
        agreement.userOne,
        agreement.userTwo,
        agreement.userOneService,
        agreement.userTwoService,
        agreement.userOneReceivedService,
        agreement.userTwoReceivedService,
        agreement.completed);}

    // a fxn that returns the length of the agreements arr so that we can return all of agreements in for loop on the front end:
    function getAgreementLength() returns (uint length) {
      return agreements.length;
    }

    // update and return the agreement
    function updateAgreement(uint agreementIdx) public returns (uint id) {
      Agreement storage agreement = agreements[agreementIdx];
      if (agreement.userOne == msg.sender)
        agreement.userOneReceivedService = true;
      else if (agreement.userTwo == msg.sender)
        agreement.userTwoReceivedService = true;
      if (agreement.userOneReceivedService && agreement.userTwoReceivedService)
        agreement.completed = true;
      getAgreement(agreementIdx);
    }
  }

