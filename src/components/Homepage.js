import React from "react";
//import Background from '../../public/assets/bgimg/home.png'

export default function Homepage() {
  return (
    <div className="home" id="background">
      <div id="homeText">
        <div className="f2">
          Aimed at local communities,<br/><span className="b">Block &amp; Mortar</span> allows for the
          grassroots sale of goods and services using the Ethereum blockchain.
        </div>
      </div>
      <div id="homeImg">
        <img role="presentation"  src="/assets/bgimg/phone2.png" />
      </div>
    </div>
  );
}
