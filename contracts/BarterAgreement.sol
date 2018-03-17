pragma solidity ^0.4.18;

// checked syntax in remix

contract BarterAgreement {
    Agreement[] agreements;

    struct Agreement {
      uint userOne;
      uint userTwo;
      string userOneService;
      string userTwoService;
      bool userOneReceivedService;
      bool userTwoReceivedService;
      bool completed;
    }

    // create a new agreement
    function newAgreement(uint userOne, uint userTwo, string userOneService, string userTwoService) returns (uint id) {
      id = agreements.push(Agreement(userOne, userTwo, userOneService, userTwoService, false, false, false)) - 1;
      return id;
    }

    // we can't return a struct so we can to return each data value one by one
    function getAgreement(uint agreementID) public view returns (
      uint userOne,
      uint userTwo,
      string userOneService,
      string userTwoService,
      bool userOneReceivedService,
      bool userTwoReceivedService,
      bool completed
    ) {
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
    function updateAgreement(uint user, uint agreementIdx) public returns (uint id) {
      Agreement storage agreement = agreements[agreementIdx];
      if (agreement.userOne == user)
        agreement.userOneReceivedService = true;
      else if (agreement.userTwo == user)
        agreement.userTwoReceivedService = true;
      if (agreement.userOneReceivedService && agreement.userTwoReceivedService)
        agreement.completed = true;
      getAgreement(agreementIdx);
    }
  }

