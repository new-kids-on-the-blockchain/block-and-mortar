import React from "react";
//import Background from '../../public/assets/bgimg/home.png'
import {Signup} from './SignUpModal'

export default function Homepage() {
  return (
    <div className="home" id="background">
      <div id="homeText">
        <div  id="text">
          Aimed at local communities,<br/><span className="b f1 lh-title white">Block &amp; Mortar</span> allows for the
          grassroots sale of goods and services using the Ethereum blockchain.
        </div>
        <Signup className="modal"/>
      </div>
      <div id="homeImg">
        <img role="presentation"  src="/assets/bgimg/phone2.png" />

      </div>


    </div>
  );
}
