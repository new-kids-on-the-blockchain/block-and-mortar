import Web3 from 'web3'

let getWeb3 = new Promise(function(resolve, reject) {
  // Wait for loading completion to avoid race conditions with web3 injection timing.
setInterval(function() {
    var results
    var web3 = window.web3

    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {
      // Use Mist/MetaMask's provider.
      web3 = new Web3(web3.currentProvider)

      results = { web3 }
      //web3.eth.getAccounts((accounts) => console.log('!!!!!!', accounts))
      console.log('Injected web3 detected.', web3.currentProvider);

      resolve(results)
    } else {
      // Fallback to localhost if no web3 injection. We've configured this to
      // use the development console's port by default.
      var provider = new Web3.providers.HttpProvider('http://172.16.27.239:8545')

      web3 = new Web3(provider)

      results = {web3}

      console.log('No web3 instance injected, using Local web3.');

      resolve(results)
    }
  }, 60000)
})

export default getWeb3


//http://127.0.0.1:8545
