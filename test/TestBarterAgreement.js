const BarterAgreement = artifacts.require('./BarterAgreement.sol')
// const web3 = require('../src/utils/getWeb3.js')

contract('BarterAgreement', function () {
  let barterAgreement

  beforeEach('setup contract for each test', async function () {
    barterAgreement = await BarterAgreement.new()
  })

  it('creates a new agreement', async function() {
    await barterAgreement.newAgreement(0xda9b1a939350dc7198165ff84c43ce77a723ef73, 0xed562f879d4c35304fd9db80155de44513ac35f9, 'Apples and Pears', 'One hour of dog walking')

    assert.equal(await barterAgreement.getAgreement(0).userOneService, 'Apples and Pears')
  })

  // it('returns the length of agreements', async function(){
  //   assert.equal(await barterAgreement.getAgreementLength(), 0)
  // })

  // it('has an owner', async function () {
  //   assert.equal(await barterAgreement.owner(), owner)
  // })

  // it('accepts funds', async function () {
  //   await fundRaise.sendTransaction({ value: 1e+18, from: donor })

  //   const fundRaiseAddress = await fundRaise.address
  //   assert.equal(web3.eth.getBalance(fundRaiseAddress).toNumber(), 1e+18)
  // })

  // it('is able to pause and unpause fund activity', async function () {
  //   await fundRaise.pause()

  //   try {
  //     await fundRaise.sendTransaction({ value: 1e+18, from: donor })
  //     assert.fail()
  //   } catch (error) {
  //     assert(error.toString().includes('invalid opcode'), error.toString())
  //   }
  //   const fundRaiseAddress = await fundRaise.address
  //   assert.equal(web3.eth.getBalance(fundRaiseAddress).toNumber(), 0)

  //   await fundRaise.unpause()
  //   await fundRaise.sendTransaction({ value: 1e+18, from: donor })
  //   assert.equal(web3.eth.getBalance(fundRaiseAddress).toNumber(), 1e+18)
  // })

  // it('permits owner to receive funds', async function () {
  //   await fundRaise.sendTransaction({ value: 1e+18, from: donor })
  //   const ownerBalanceBeforeRemovingFunds = web3.eth.getBalance(owner).toNumber()

  //   const fundRaiseAddress = await fundRaise.address
  //   assert.equal(web3.eth.getBalance(fundRaiseAddress).toNumber(), 1e+18)

  //   await fundRaise.removeFunds()

  //   assert.equal(web3.eth.getBalance(fundRaiseAddress).toNumber(), 0)
  //   assert.isAbove(web3.eth.getBalance(owner).toNumber(), ownerBalanceBeforeRemovingFunds)
  // })
})
