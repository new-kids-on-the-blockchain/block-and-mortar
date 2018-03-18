//These are the commands to test our contract in the truffle console
var barterAgreement = BarterAgreement.at(BarterAgreement.address)

barterAgreement.newAgreement(0xda9b1a939350dc7198165ff84c43ce77a723ef73, 0xed562f879d4c35304fd9db80155de44513ac35f9, 'Apples and Oranges', 'One hour of dog walking')

barterAgreement.getAgreement(0)

barterAgreement.updateAgreement(0)

Questions for Jon and LeMona:
//What does this look like on the blockchain? Are we editing an instance of BarterAgreement on the same block?
//Are we recreating BarterAgreement each time?
//How are we interacting with our storage array?
//Right now, we're manually compiling and migrating our contract and instantiating Ganache each time; is that supposed to be happening through the app?

//diff. between transaction index and block number?
//where is the contract address? Why is it null?

Questions for Leigh and Kate
//How much setup is acceptable/expected? Is there a way to streamline that?
