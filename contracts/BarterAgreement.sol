pragma solidity ^0.4.18;

// ask jon about where we should be storing our contracts
// should we have a return single contract function?
// what is external view returns?
// can we ever get all agreements?
// how are we going to call getAgreement?
// how do we return the agreement no matter what?

  contract BarterAgreement {

    struct Agreement {
      uint userOne;
      uint userTwo;
      bytes32 userOneService;
      bytes32 userTwoService;
      bool userOneReceivedService;
      bool userTwoReceivedService;
      bool completed
    }

    uint numAgreements;

    // b/c we need a dynamic array (not sure of the size) this function maps each agreement created to a diff place in memory
    mapping(uint => Agreement) agreements;

    function newAgreement(uint userOne, uint userTwo, bytes32 userOneService,   bytes32 userTwoService) returns (uint agreementID) { agreementID = numAgreements++;
    Agreement a = agreements[agreementID];
      a.userOne = userOne;
      a.userTwo = userTwo;
      a.userOneService = userOneService;
      a.userTwoService = userTwoService;
      a.userOneReceivedService = false;
      a.userTwoReceivedService = false;
      completed = false;
    }

    function updateAgreement(uint user, uint agreementID)
      Agreement a = agreements[agreementID];
      if (a.userOne == user)
        a.userOneReceivedService = true;
      else if (a.userTwo == user)
        a.userTwoReceivedService = true;
      if (a.userOneReceivedService && a.userTwoReceivedService)
        a.completed = true;
    }

    function getAgreement(uint agreementID) external view returns (
      uint userOne;
      uint userTwo;
      bytes32 userOneService;
      bytes32 userTwoService;
      bool userOneReceivedService;
      bool userTwoReceivedService;
      bool completed
    ) {
      Agreement a = agreements[agreementID];
        a.userOne = userOne;
        a.userTwo = userTwo;
        a.userOneService = userOneService;
        a.userTwoService = userTwoService;
        a.userOneReceivedService = userOneReceivedService;
        a.userTwoReceivedService = userTwoReceivedService;
        completed = completed;
    }
  }
