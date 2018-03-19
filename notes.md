//These are the steps and commands to test our contract in the truffle console
1) ganache-cli
2) truffle compile
3) truffle migrate --reset
4) npm start?
5) truffle console

var barterAgreement = BarterAgreement.at(BarterAgreement.address)

barterAgreement.newAgreement(.5)

barterAgreement.getAgreement(0)

barterAgreement.updateAgreement(0)
