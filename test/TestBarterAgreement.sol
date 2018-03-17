pragma solidity ^0.4.2;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/BarterAgreement.sol";

contract TestBarterAgreement {
BarterAgreement barterAgreement = BarterAgreement(DeployedAddresses.BarterAgreement());

  function testNewAgreement() public {
    uint returnedId = barterAgreement.newAgreement(1, 2, 'grapes from my garden', 'cookies from my oven');

    uint expected = 0;

    Assert.equal(returnedId, expected, "The first barter agreement should have an id of zero");
  }

  // function testUpdateAgreementUserOne(1, 1) public {
  //   BarterAgree.

  //   simpleStorage.set(89);

  //   uint expected = 89;

  //   Assert.equal(simpleStorage.get(), expected, "It should store the value 89.");
  // }

  //   function testUpdateAgreementUserTwo() public {
  //   SimpleStorage simpleStorage = SimpleStorage(DeployedAddresses.SimpleStorage());

  //   simpleStorage.set(89);

  //   uint expected = 89;

  //   Assert.equal(simpleStorage.get(), expected, "It should store the value 89.");
  // }

  //   function testGetAgreement() public {
  //   SimpleStorage simpleStorage = SimpleStorage(DeployedAddresses.SimpleStorage());

  //   simpleStorage.set(89);

  //   uint expected = 89;

  //   Assert.equal(simpleStorage.get(), expected, "It should store the value 89.");
  // }


}



// JOHNS CODE
// contract TestNoteOwnership {

//   // NoteOwnership noteOwnership = NoteOwnership(DeployedAddresses.NoteOwnership());

//   function testItGetsBalanceOf() public {
//     noteOwnership.createNote(8, "male", "DATA");

//     uint expected = 1;

//     Assert.equal(noteOwnership.balanceOf(tx.origin), expected, "It should get the balance of a contract");
//   }

// }
