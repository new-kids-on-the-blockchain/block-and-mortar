import React from 'react'
import { Link } from 'react-router-dom'

const About = props => {
  return (
    <div className="home" id="background">
      <div
        className="FAQ avenir mw5 mw7-ns center bg-light-gray pa3 ph5-ns"
        id="topMargin"
      >
        <div className="f2">About Block & Mortar</div>
        <div className="faq-question">
          <div className="containerInner bt">
            <div className="f4 b">What is Block & Mortar?</div>
            <p>
              Block & Mortar is an app that allows local communities to buy and
              sell their goods and services, featuring an intuitive user
              interface backed by the security and transparency of the Ethereum
              blockchain.
            </p>
            <p>
              Users can post an item or service for sale and set a price in
              ether. (A link to a currency converter is available.) Upon doing
              so, the seller creates a transaction on the blockchain, and the
              item or service is posted to the Marketplace.
            </p>
            <p>
              Interested buyers can browse goods or services for sale, view
              specific item details, view the seller's public profile (which
              includes a transaction history), as well as message a seller
              regarding an item. Once a buyer places an order, the existing
              transaction on the blockchain is updated to include the buyer's
              information, along with the status of the order.
            </p>
            <p>
              When an order is fulfilled, the buyer can complete the order,
              which will update the status on the blockchain one final time and
              trigger the transfer of funds. Both the buyer and seller will then
              be able to view their transaction ID on the blockchain.
            </p>
            <p>
              Users can also access all of their pending orders and completed
              transactions easily from their user dashboard.
            </p>
          </div>
        </div>
        <div className="faq-question">
          <div className="containerInner bt">
            <div className="f4 b">A Note on Deployment:</div>
            <p>
              This site was developed in 18 days as a capstone project for the Grace Hopper Program at Fullstack Academy. Because Block & Mortar was built for educational, rather than commerical use, the development team chose not to deploy to the Ethereum Main Network, where transactions require “gas” payment. Instead, we used the Ganache test blockchain for development. Our team is currently exploring deployment to one of the Ethereum test networks and will have more updates coming soon. In the meantime, feel free to explore the site as-is, but be aware that posting and purchasing goods and services using the Ethereum blockchain is unavailable.  Check out the project’s GitHub repository and demo video for more information.
            </p>
          </div>
        </div>
        <div className="faq-question">
          <div className="containerInner bt">
            <div className="f4 b">Project Information</div>
            <p>
              This project was built in 18 days as a capstone project for the{" "}
              <a className="dim" href="https://www.gracehopper.com/">
                Grace Hopper Program
              </a>{" "}
              at Fullstack Academy. Check out the project's{" "}
              <a
                className="dim"
                href="https://github.com/new-kids-on-the-blockchain/block-and-mortar"
              >
                GitHub repository
              </a>{" "}
              and <a className="dim" href="https://www.youtube.com/watch?v=VZP-U8pChKI&amp;index=2" target="_blank">demo video</a>.
            </p>
            <div className="b">Contributors</div>
            <ul>
              <li>
                <a className="dim" href="https://github.com/anjiemerchant">
                  Anjali Merchant
                </a>
              </li>
              <li>
                <a className="dim" href="https://github.com/annabelnlau">
                  Annabel Lau
                </a>
              </li>
              <li>
                <a className="dim" href="https://github.com/clacla826">
                  Claudia Baik
                </a>
              </li>
              <li>
                <a className="dim" href="https://github.com/k-vosswinkel">
                  Kait Hoehne
                </a>
              </li>
            </ul>
            <p>
              A special thanks to Jon Schwartz, LeMona Wyatt, Leigh Steiner,
              Kate Humphrey, and John McDonald.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
