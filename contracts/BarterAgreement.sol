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












//JON'S
// contract BarterAgreement {

//   Agreement[] agreements;

//   struct Agreement {
//     address owner;
//     address buyer;
//     uint256 price;
//     bool completed;
//     bool inProgress;
//   }

//   function newAgreement(uint256 price) returns (uint) {
//     uint id = Agreement.push(Agreement(
//       msg.sender;
//       '0x000000000000000000000000000';
//       price;
//       false;
//     )) - 1;
//     return id;
//   }

//   function updateAgreement(uint id){
//     Agreement storage agreement = agreements[id];
//     require(agreement.completed != true);
//     agreement.buyer = msg.sender;
//     agreement.inProgress = true;
//   }

//   function completeAgreement(uint id){
//     Agreement storage agreement = agreements[id];
//     require(agreement.buyer == msg.sender);
//     agreement.completed = true;
//     agreement.inProgress = false;
//   }
// }











// checked syntax in remix

// contract BarterAgreement {
//     Agreement[] agreements;

//     struct Agreement {
//       uint agreementId;
//       address owner;
//       address buyer;
//       uint256 price;
//       bool received;
//     }

//     address public seller;

//     // create a new agreement
//     function newAgreement(uint256 price) returns (uint agreementId) {
//       agreementId = agreements.push(Agreement(agreements.length-1, msg.sender, null, price, false)) - 1;
//       return agreementId;
//     }

//     // we can't return a struct so we can to return each data value one by one
//     function getAgreement(uint agreementID) public view returns (
//       uint agreementId
//       address owner;
//       address buyer;
//       uint256 price;
//       bool received;
//     )
//     {
//       Agreement storage agreement = agreements[agreementID]; //what is Agreement storage agreement doing?
//       return (
//         agreement.agreementId,
//         agreement.owner,
//         agreement.buyer,
//         agreement.price,
//         agreement.received
//       );
//     }

//     // a fxn that returns the length of the agreements arr so that we can return all of agreements in for loop on the front end:
//     function getAgreementLength() returns (uint length) {
//       return agreements.length;
//     }

//     // update and return the agreement
//     function updateAgreement(uint agreementIdx) public returns (uint id) {
//       Agreement storage agreement = agreements[agreementIdx];
//       if (agreement.userOne == msg.sender)
//         agreement.userOneReceivedService = true;
//       else if (agreement.userTwo == msg.sender)
//         agreement.userTwoReceivedService = true;
//       if (agreement.userOneReceivedService && agreement.userTwoReceivedService)
//         agreement.completed = true;
//       getAgreement(agreementIdx);
//     }
//   }



