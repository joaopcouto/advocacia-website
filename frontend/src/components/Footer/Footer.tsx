import React from "react";
import "./styles.css";
import logoImg from "../../assets/images/logo.png";
import arrowbrown from "../../assets/icons/arrow-brown.svg";
import phonebrown from "../../assets/icons/phone-brown.svg";
import phonebrown2 from "../../assets/icons/phone-brown2.svg";
import envelope from "../../assets/icons/envelope-brown.svg";


export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-brand">
        <img className="logoImg" src={logoImg} alt="logo" />
        <p className="text-oab">OAB/SP 230.817 </p>
      </div>



      

      <div className="footer-location-container">

      <div className="footer-location">
        <div className="header-location">
          <h2 className="title-location">Localização</h2>
          <img className="arrow-location" src={arrowbrown} alt="" />
        </div>

        <div className="description-location">
          <p className="description-location-text">
            Rua Capitão João José de Macedo, nº 340, 3° andar
            </p>
          <p>
            Jacareí - São Paulo | CEP 12327-030
          </p>
        </div>
      </div>

      </div>

      <div className="footer-contact-container">

      <div className="footer-contact">
        <div className="header-contact">
          <h2 className="title-contact">Fale conosco</h2>
          <img src={phonebrown} alt="" />
        </div>

        <div className="description-contact-email"> 
          <img className="envelope" src={envelope} alt="" />
          <a className="text-email" href="mailto:advocaciafreitascouto@gmail.com">advocaciafreitascouto@gmail.com</a>
        </div>
        <div className="description-contact-phone">
          <img className="phone" src={phonebrown2} alt="" />
          <a className="text-phone" href="tel:5512997398999">55 (12) 99739-8999</a>
        </div>
      </div>

      </div>

    
    </footer>
  );
};
