//These are the steps and commands to test our contract in the truffle console
1) ganache-cli --mnemonic
2) truffle compile
3) truffle migrate --reset
  (only use --reset to run all migrations from the beginning; not to add on new agreements)
4) npm start
5) truffle console

var barterAgreement = BarterAgreement.at(BarterAgreement.address)


barterAgreement.newAgreement(0xbddae5ebde94256d38ea339e0a7a928bcaf3c61e, 0xcbd14b623d49fd1cad0fa4a805f37b469526c5f6, '1 Copy of Die Hard', '1 Christmas Tree')

//Claudia local testing//////
barterAgreement.newAgreement(0xe586213257405fd50a2c6ece57b519e92a604807, 0xb6f819231d544f55e635ef24a9665ecf3983ac4b, '1 Copy of Die Easyyyyy', '1 Christmas Flowerrrrr')

barterAgreement.newAgreement(5)
///////





barterAgreement.newAgreement(1)

barterAgreement.getAgreement(0)

barterAgreement.getAgreementLength()

barterAgreement.updateAgreement(0)

barterAgreement.completeAgreement(0)

//avatar img list
'/assets/avatars/avatars_0000_1-copy.png'
'/assets/avatars/avatars_0001_2-copy.png'
'/assets/avatars/avatars_0002_3-copy.png'
'/assets/avatars/avatars_0003_4-copy.png'
'/assets/avatars/avatars_0004_5-copy.png'
'/assets/avatars/avatars_0005_6-copy.png'
'/assets/avatars/avatars_0006_7-copy.png'
'/assets/avatars/avatars_0007_8-copy.png'
'/assets/avatars/avatars_0008_9-copy.png'
'/assets/avatars/avatars_0009_10-copy.png'
'/assets/avatars/avatars_0010_11-copy.png'
'/assets/avatars/avatars_0011_12-copy.png'
'/assets/avatars/avatars_0012_13-copy.png'
'/assets/avatars/avatars_0013_14-copy.png'
'/assets/avatars/avatars_0014_15-copy.png'
'/assets/avatars/avatars_0015_16-copy.png'
