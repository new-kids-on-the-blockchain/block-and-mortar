//These are the steps and commands to test our contract in the truffle console
1) ganache-cli --mnemonic MNEMONIC_GOES_HERE
2) truffle compile
3) truffle migrate --reset
  (only use --reset to run all migrations from the beginning; not to add on new agreements)
4) npm start
5) truffle console

var barterAgreement = BarterAgreement.at(BarterAgreement.address)

barterAgreement.newAgreement(1)

barterAgreement.getAgreement(0)

barterAgreement.getAgreementLength()

barterAgreement.updateAgreement(0)

barterAgreement.completeAgreement(0)
