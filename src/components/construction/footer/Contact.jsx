import React from "react";
import "./contact.css";
import { Link } from "react-router-dom";
import facebook from './FACEBOOK.svg'
import instagram from './INST.svg'
import youtube from './YOUTUBE.png'
import Map from "./Map";



function Contact() {
  return (
    <div className="contactHalfContainer">
      <div className="leftDiv">
        <p className="contactTitle">Контакты</p>
        <div>
          <p className="footerPartTitle">ОБЩИЕ</p>
          <div className="footerParagraph">
            <p>+(351) 282 405 600</p>
            <p>+(351) 282 405 697</p>
            <p>info@autodromodoalgarve.com</p>
          </div>
        </div>
        <div>
          <p className="footerPartTitle">БИЛЕТЫ</p>
          <div className="footerParagraph">
            <p>+(351) 282 405 600</p>
            <p>tickets@autodromodoalgarve.com</p>
          </div>
        </div>
        <div className="icons">
          <img src={youtube} alt="" />
          <img src={instagram} alt="" />
          <img src={facebook} alt="" />
        </div>
      </div>

      <div className="mapDiv">
        <p className="footerPartTitle">АДРЕС</p>
        <p className="footerParagraph">
          Sitio do Escampadinho, Mexilhoeira Grande, 8500-148 Portimao, Portugal
        </p>
        <div>
            <Map />
        </div>
      </div>
    </div>
  );
}

export default Contact;
