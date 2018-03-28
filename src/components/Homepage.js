import React from "react";
import { connect } from "react-redux";
import { Signup } from "./SignUpModal";

const Homepage = props => (
  <div>
    {props.isLoggedIn ? (
      <div className="home" id="background">
        <div id="homeText">
          <div className="f1" id="textSignedIn">
            Aimed at local communities,<br />
            <span className="b">Block &amp; Mortar</span> allows for the
            grassroots sale of goods and services using the Ethereum blockchain.
          </div>
        </div>
        <div id="homeImg">
          <img role="presentation" src="/assets/bgimg/phone2.png" />
        </div>
      </div>
    ) : (
      <div className="home" id="background">
        <div id="homeText">
          <div id="text">
            Aimed at local communities,<br />
            <span className="b f1 lh-title white">Block &amp; Mortar</span>{" "}
            allows for the grassroots sale of goods and services using the
            Ethereum blockchain.
          </div>

          <Signup className="modal" />
        </div>

        <div id="homeImg">
          <img role="presentation" src="/assets/bgimg/phone2.png" />
        </div>
      </div>
    )}
  </div>
);

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.currentUser.id
  };
};

export default connect(mapState, null)(Homepage);
