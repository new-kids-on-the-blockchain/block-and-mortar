import React from "react";

export default function Homepage () {

    return (
       <div className="avenir">
           <h1>Aimed at local communities, Block &amp; Mortar allows for the grassroots sale of goods and services using the Ethereum blockchain. </h1>
            <div className="avenir flex items-center justify-center pa4 bg-lightest-blue navy">
                <p className="fl w-third">Before signing up or logging into Block &amp; Mortar, please make sure you've signed up and logged into your <a href="https://metamask.io/">Metamask account</a>.</p>

                <p className="fl w-third">For those of you new to blockchain technology, Metamask connects you to the Ethereum blockchain, a decentralized cryptocurrency platform that serves as a public ledger. Metamask will also be your digital wallet, so you'll need a bit of ether cryptocurrency to engage with your community on Block &amp; Mortar.</p>

                <p className="fl w-third">Once you're set up with Metamask and Block &amp; Mortar, you will be able to buy or sell goods and services within your local community, an exchange codified and facilitated by a "smart contract." Login to learn more!</p>
            </div>
       </div>
    );
}
