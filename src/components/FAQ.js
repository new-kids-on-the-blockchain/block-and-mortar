import React from 'react'
import { Link } from 'react-router-dom'

const FAQ = props => {
  return (
    <div className="FAQ avenir mw5 mw7-ns center bg-light-gray pa3 ph5-ns">
      <h2>A Beginner’s Guide to Blockchain</h2>

      <div className="faq-question">
        <h4>What is the blockchain?</h4>
        <p>A blockchain is a continuously growing list of records, called blocks, which are linked and secured using cryptography. It is an open, distributed ledger that can record transactions between two parties, and, by design, it is unchangeable. Blockchains are typically managed using a peer-to-peer network that collectively adheres to a set of rules for adding new blocks to the chain.</p>
      </div>

      <div className="faq-question">
        <h4>What is a cryptocurrency?</h4>
        <p>A cryptocurrency is a digital medium of exchange that uses cryptography to secure its transactions. Cryptocurrencies use decentralized control that works through a blockchain, functioning as a distributed ledger. Ether and bitcoin are examples of cryptocurrencies.</p>
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
        <p>Smart contracts live on the blockchain, providing a set of rules that facilitate and codify interactions between two or more parties. Block and Mortar's smart contract, for example, provides a framework for interaction between buyers and sellers. The smart contract captures information about the sale, resulting in the transfer of ether from buyer to seller only upon receipt on the good or service in question.</p>
      </div>

      <div className="faq-question">
        <h4>Why am I being charged a transaction fee to post or purchase a service?</h4>
        <p>Blockchain operations require computational resources, as specific nodes across the blockchain network (called "miners") must validate, secure, and store transactions. "Gas" accounts for the cost of these computations. The tranasction fee is calculated by multiplying the gas limit (a unit of measurement) by the gas price (measured in a small denomination of ether called gwei); both of these are set by you, the user, when interacting with the blockchain through Metamask. </p>
      </div>

      <h3><Link to="/signup">Sign Up</Link> and get started to learn more!</h3>
    </div>
  )
}

export default FAQ
