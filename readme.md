# Block & Mortar

[Block & Mortar Beta Site](http://blockandmortar.nyc/)

Video Demo: Link to come

Aimed at local communities, Block & Mortar allows for the grassroots sale of goods and services using the Ethereum blockchain.


## App Functionality

Block & Mortar is an app that allows local communities to buy and sell their goods and services, featuring an intuitive user interface backed by the security and transparency of the Ethereum blockchain. 

Users can post an item or service for sale and set a price in ether. (A link to a currency converter is available.) Upon doing so, the seller creates a transaction on the blockchain, and the item or service is posted to the Marketplace. 

Interested buyers can browse goods or services for sale, view specific item details, view the seller's public profile (which includes a transaction history), as well as message a seller regarding an item. Once a buyer places an order, the existing transaction on the blockchain is updated to include the buyer's information, along with the status of the order.

When an order is fulfilled, the buyer can complete the order, which will update the status on the blockchain one final time and trigger the transfer of funds. Both the buyer and seller will then be able to view their transaction ID on the blockchain. 

Users can also access all of their pending orders and completed transactions easily from their user dashboard.

## Technologies Used

* [Node.js](https://nodejs.org/en/)
* [Solidity](http://solidity.readthedocs.io/en/latest/): language for writing our smart contract
* [Web3](https://web3js.readthedocs.io/en/1.0/): allows us to talk to our smart contract on the blockchain
* [Truffle](http://truffleframework.com/) and [Ganache](http://truffleframework.com/ganache/): Ethereum development environment for testing our smart contract
* [MetaMask](https://metamask.io/): allows our users to interact with our app using their own digital wallet on the Ethereum network
* [Express](https://expressjs.com/)
* [PostgreSQL](https://www.postgresql.org/) and [Sequelize](http://docs.sequelizejs.com/)
* [React](https://reactjs.org/) and [Redux](https://redux.js.org/)
* [Tachyons](https://tachyons.io/) and CSS


## Implementation

All of our user transactions were facilitated by a smart contract written in a language called Solidity. Our contract included three functions: one to create a new agreement, which is called when a user posts something for sale; a function to update the transaction when a buyer places an order; and a third function to complete the transaction after the order is fulfilled.

In addition to the NERD stack (Node.js, Express, React, Databases using SQL), we used a suite of new technologies to incorporate the blockchain into our app. Web3 allowed us to interact with our blockchain node behind the scenes. We used Truffle and Ganache to spin up a development blockchain to test our smart contract functions. Each instance of Ganache provided us with 10 user accounts with 100 fake ether. Once we imported these test user accounts into MetaMask, a plugin that served as a digital wallet, we were able to simulate transactions among users.

With scalability in mind, we made the conscious choice to keep only the most pertinent information relating to transactions on the blockchain, and to store the rest of our data in a PostgreSQL database. Not only does it take more time to query the blockchain, but every function call costs a small amount of ether ("gas"), so we wanted to minimize calls to the blockchain. To protect the integrity of our database, we used promises to ensure that we would post to our database ONLY after receiving a successful response from the blockchain. We believe that this decision would lead to a more seamless and less costly experience for our users.

## Contributors

* [Anjali Merchant](https://github.com/anjiemerchant)
* [Annabel Lau](https://github.com/annabelnlau)
* [Claudia Baik](https://github.com/clacla826)
* [Kait Hoehne](https://github.com/k-vosswinkel)

This project was built in 18 days as a capstone project for the [Grace Hopper Program](https://www.gracehopper.com/) at Fullstack Academy.
