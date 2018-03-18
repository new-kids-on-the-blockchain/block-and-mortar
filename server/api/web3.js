// instantiate the web3 object and use it to call our contract functions (located on the ganache blockchain)

const router = require('express').Router()
// const Web3 = require('.net')
// const compiledContract = require('../../contracts/BarterAgreement.json');
module.exports = router

let ipcAddr;
let web3;
let accountAddress;
let accountPassword;
let byteCode;
let ProduceSwapContract;


