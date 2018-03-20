pragma solidity ^0.4.18;

// checked syntax in remix

contract BarterAgreement {
    Agreement[] agreements;
    // storage Agreement[] agreements; //"Storage" was causing errors

    struct Agreement {
        address owner;
        address buyer;
        uint256 price;
        bool completed;
        bool inProgress;
    }

    // Create a new agreement
    function newAgreement(uint256 price) public returns (uint) {
        uint id = agreements.push(Agreement(msg.sender, 0, price, false, false)) - 1;
        return id;
    }


    // Get existing agreement by ID. We can't return a struct so we can to return each data value one by one
    function getAgreement(uint agreementID) public view returns (
      address owner,
      address buyer,
      uint price,
      bool completed,
      bool inProgress
    )
    {
        Agreement storage agreement = agreements[agreementID];
        return (
          agreement.owner,
          agreement.buyer,
          agreement.price,
          agreement.completed,
          agreement.inProgress
        );
    }

    //Return number of agreements in storage on the blockchain
    function getAgreementLength() public view returns (uint length) {
        return agreements.length;
    }

    // Update agreement
    function updateAgreement (uint id) public {
        Agreement storage agreement = agreements[id];
        require(agreement.completed != true);
        agreement.buyer = msg.sender;
        agreement.inProgress = true;
    }

    //Complete agreement
    function completeAgreement(uint id) public {
        Agreement storage agreement = agreements[id];
        require(agreement.buyer == msg.sender);
        agreement.completed = true;
        agreement.inProgress = false;
    }
}

