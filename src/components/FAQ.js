import React from 'react'
import { Link } from 'react-router-dom'

const FAQ = props => {
  return (
    <div className="home" id="background">
      <div className="FAQ avenir mw5 mw7-ns center bg-light-gray pa3 ph5-ns" id="topMargin">
        <div className="f2">Beginner's Guide to Blockchain</div>

        <div className="faq-question">
          <div className="containerInner bt">
            <div className="f4 b">What is the blockchain?</div>
            <p>A blockchain is a continuously growing list of records, called blocks, which are linked and secured using cryptography. It is an open, distributed ledger that can record transactions between two parties, and, by design, it is unchangeable. Blockchains are typically managed using a peer-to-peer network that collectively adheres to a set of rules for adding new blocks to the chain.</p>
          </div>
        </div>

        <div className="faq-question">
          <div className="containerInner bt">
            <div className="f4 b">What is a cryptocurrency?</div>
            <p>A cryptocurrency is a digital medium of exchange that uses cryptography to secure its transactions. Cryptocurrencies use decentralized control that works through a blockchain, functioning as a distributed ledger. Ether and bitcoin are examples of cryptocurrencies.</p>
          </div>
        </div>

        <div className="faq-question">
          <div className="containerInner bt">
            <div className="f4 b">Which cryptocurrency do you use?</div>
            <p>Block & Mortar is built on the Ethereum blockchain, using "ether," a cryptocurrency, "wei," a smaller denomination of ether, and "gas," a measure of the cost of writing to the blockchain. Ethereum is a decentralized platform that runs smart contracts: applications that run exactly as programmed without any possibility of downtime, censorship, fraud or third-party interference.</p>
          </div>
        </div>

        <div className="faq-question">
          <div className="containerInner bt">
            <div className="f4 b">What is a digital wallet?</div>
            <p>A digital wallet is an electronic address that allows an individual to make electronic transactions. A digital wallet can be linked to a user's bank account, and can be used to make transactions with a variety of cryptocurrencies like bitcoin or ether.</p>
          </div>
        </div>

        <div className="faq-question">
          <div className="containerInner bt">
            <div className="f4 b">How does this all work? What is a smart contract?</div>
            <p>Smart contracts live on the blockchain, providing a set of rules that facilitate and codify interactions between two or more parties. Block and Mortar's smart contract, for example, provides a framework for interaction between buyers and sellers. The smart contract captures information about the sale, resulting in the transfer of ether from buyer to seller only upon receipt on the good or service in question.</p>
          </div>
        </div>

        <div className="faq-question">
          <div className="containerInner bt">
            <div className="f4 b">Why am I being charged a transaction fee to post or purchase a service?</div>
            <p>Blockchain operations require computational resources, as specific nodes across the blockchain network (called "miners") must validate, secure, and store transactions. "Gas" accounts for the cost of these computations. The tranasction fee is calculated by multiplying the gas limit (a unit of measurement) by the gas price (measured in a small denomination of ether called gwei, or wei); both of these are set by you, the user, when interacting with the blockchain through Metamask. </p>
          </div>
        </div>

        <div className="faq-question">
        <div className="containerInner bt">
          <div className="f4 b">How do I log into MetaMask?</div>
          <p>Download instructions for using Metamask <a
          className="dim"
          href="/assets/metamask-instructions.pdf">here.</a>
        </p>
        </div>
      </div>

        <div className="f4 b tc-l"><span className="inline-flex items-center"><Link className="dim ph1" to="/signup">Sign Up</Link> and get started to learn more!</span></div>
      </div>
    </div>
  )
}

export default FAQ
