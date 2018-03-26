import React from 'react'

const FAQ = (props) => {
  return (
    <div className="FAQ">
      <h2>Beginner’s Guide to Blockchain</h2>

      <div className="faq-question">
        <h4>What is the blockchain?</h4>
        <p>A blockchain is a continuously growing list of records, called blocks, which are linked and secured using cryptography. It is an open, distributed ledger that can record transactions between two parties, and, by design, it is unchangeable. Blockchains are typically managed using a peer-to-peer network that collectively adheres to a set of rules for adding new blocks to the chain.</p>
      </div>

      <div className="faq-question">
        <h4>What is a cryptocurrency?</h4>
        <p>A cryptocurrency is a digital medium of exchange that uses cryptography to secure its transactions. Cryptocurrencies use decentralized control that works through a blockchain, functioning as a distributed ledger.</p>
      </div>

      <div className="faq-question">
        <h4>Which cryptocurrency do you use?</h4>
        <p>Block & Mortar is built on the Ethereum blockchain, using "ether," a cryptocurrency, "wei," a smaller denomination of ether, and "gas," a measure of the cost of writing to the blockchain. Ethereum is a decentralized platform that runs smart contracts: applications that run exactly as programmed without any possibility of downtime, censorship, fraud or third-party interference.</p>
      </div>

      <div className="faq-question">
        <h4>What is a digital wallet?</h4>
        <p>A digital wallet is an electronic address that allows an individual to make electronic transactions. A digital wallet can be linked to a user's bank account, and can be used to make transactions with a variety of cryptocurrencies like bitcoin or ether.</p>
      </div>

      <div className="faq-question">
        <h4>How does this all work? What is a smart contract?</h4>
        <p>This is how we facilitate transactions...MORE HERE</p>
      </div>

      <div className="faq-question">
        <h4>Why am I being charged to post a service?</h4>
        <p>BECAUSE YOU GOTTA</p>
      </div>

      <h3>Sign up and get started to learn more!</h3>
    </div>
  )
}

export default FAQ
