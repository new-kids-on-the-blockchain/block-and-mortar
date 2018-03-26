pragma solidity ^0.4.18;
// checked syntax in remix
contract BarterAgreement {
    event AgreementLog(
        address owner,
        address buyer,
        uint256 id,
        uint256 price,
        bool completed,
        bool inProgress
    );
    event PaymentLog(
        uint256 value
    );
    Agreement[] agreements;
    // storage Agreement[] agreements; //"Storage" was causing errors
    //event console(address sender)
    struct Agreement {
        address owner;
        address buyer;
        uint256 price;
        bool completed;
        bool inProgress;
    }
    // Create a new agreement
    function newAgreement(uint256 price) public {
        uint id = agreements.push(Agreement(msg.sender, 0x0000, price, false, false))
        - 1;
        AgreementLog(msg.sender, 0x0000, id, price, false, false);
        //capital A agreement returns 1 instead of 0 because it's the next open spot
        //Agreement invoked would return a new instance of that obj
        // return id;
        //explore returning agreements.length instead?
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
        AgreementLog(agreement.owner, agreement.buyer, id, agreement.price, agreement.completed, agreement.inProgress);
    }
    //Complete agreement
    function completeAgreement(uint id) public payable {
        Agreement storage agreement = agreements[id];
        require(agreement.buyer == msg.sender);
        agreement.owner.transfer(msg.value);
        agreement.completed = true;
        agreement.inProgress = false;
        AgreementLog(agreement.owner, agreement.buyer, id, agreement.price, agreement.completed, agreement.inProgress);
        PaymentLog(msg.value);
    }
}
