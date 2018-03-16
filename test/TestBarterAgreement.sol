pragma solidity ^0.4.2;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/BarterAgreement.sol";

contract TestBarterAgreement {

  function testNewAgreement() public {
    // SimpleStorage simpleStorage = SimpleStorage(DeployedAddresses.SimpleStorage());
    uint returnedId = BarterAgreement.newAgreement(1, 2, 'grapes from my garden', 'cookies from my oven')

    unit expected = 1

    Assert.equal(returnedId, expected, "The first barter agreement should have an id of one");
  }

  function testUpdateAgreementUserOne() public {
    SimpleStorage simpleStorage = SimpleStorage(DeployedAddresses.SimpleStorage());

    simpleStorage.set(89);

    uint expected = 89;

    Assert.equal(simpleStorage.get(), expected, "It should store the value 89.");
  }

    function testUpdateAgreementUserTwo() public {
    SimpleStorage simpleStorage = SimpleStorage(DeployedAddresses.SimpleStorage());

    simpleStorage.set(89);

    uint expected = 89;

    Assert.equal(simpleStorage.get(), expected, "It should store the value 89.");
  }

    function testGetAgreement() public {
    SimpleStorage simpleStorage = SimpleStorage(DeployedAddresses.SimpleStorage());

    simpleStorage.set(89);

    uint expected = 89;

    Assert.equal(simpleStorage.get(), expected, "It should store the value 89.");
  }


}
