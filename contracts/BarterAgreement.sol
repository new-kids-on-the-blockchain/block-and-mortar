pragma solidity ^0.4.18;

// checked syntax in remix

contract BarterAgreement {
    Agreement[] agreements;

    struct Agreement {
      uint agreementId;
      address owner;
      address buyer;
      uint256 price;
      bool received;
    }

    address public seller;

    // create a new agreement
    function newAgreement(uint256 price) returns (uint agreementId) {
      agreementId = agreements.push(Agreement(agreements.length-1, msg.sender, null, price, false)) - 1;
      return agreementId;
    }

    // we can't return a struct so we can to return each data value one by one
    function getAgreement(uint agreementID) public view returns (
      uint agreementId
      address owner;
      address buyer;
      uint256 price;
      bool received;
    )
    {
      Agreement storage agreement = agreements[agreementID]; //what is Agreement storage agreement doing?
      return (
        agreement.agreementId,
        agreement.owner,
        agreement.buyer,
        agreement.price,
        agreement.received
      );
    }

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



