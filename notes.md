//These are the steps and commands to test our contract in the truffle console
1) ganache-cli
2) truffle compile
3) truffle migrate --reset
4) npm start?
5) truffle console

var barterAgreement = BarterAgreement.at(BarterAgreement.address)

barterAgreement.newAgreement(0xda9b1a939350dc7198165ff84c43ce77a723ef73, 0xed562f879d4c35304fd9db80155de44513ac35f9, 'Apples and Oranges', 'One hour of dog walking')

barterAgreement.getAgreement(0)

barterAgreement.updateAgreement(0)
