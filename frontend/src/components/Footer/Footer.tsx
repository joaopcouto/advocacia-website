import React from "react";
import "./styles.css";
import logoImg from "../../assets/images/logo.png";
import arrowbrown from "../../assets/icons/arrow-brown.svg";
import phonebrown from "../../assets/icons/phone-brown.svg";
import phonebrown2 from "../../assets/icons/phone-brown2.svg";
import envelope from "../../assets/icons/envelope-brown.svg";

import locationImg from "../../assets/icons/navigation-arrow-bold.svg";
import emailImg from "../../assets/icons/envelope-simple-bold.svg";
import phoneImg from "../../assets/icons/phone-bold.svg";
import whatsappImg from "../../assets/icons/whatsapp-logo-bold.svg";
import instagramImg from "../../assets/icons/instagram-logo-bold.svg";

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-brand">
        <img className="logoImg" src={logoImg} alt="logo" />
        <p className="text-oab">OAB/SP 230.817 </p>
      </div>

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

      <div className="footer-contact">
        <div className="header-contact">
          <h2 className="title-contact">Fale conosco</h2>
          <img src={phonebrown} alt="" />
        </div>

        <div className="description-contact-email">
          <img src={envelope} alt="" />
          <p className="text-email">advocaciafreitascouto@gmail.com</p>
        </div>
        <div className="description-contact-phone">
          <img className="text-phone" src={phonebrown2} alt="" />
          <a className="text-phone" href="tel:5512997398999">55 (12) 99739-8999</a>
        </div>

        {/* <ul className='footer-list'>
        
        <li>
        <img src={locationImg} alt="" />
          Rua Capitão João José de Macedo, 340, 3° andar
        </li>
        <li>
          <img src={emailImg} alt="" />
          <a href="mailto:advocaciafreitascouto@gmail.com">advocaciafreitascouto@gmail.com</a>
        </li>
        <li>
          <img src={phoneImg} alt="" />
          <a href="tel:5512997398999">55 (12) 99739-8999</a>
        </li>
        <li>
        <img src={whatsappImg} alt="" />
          <a target='_blank' href="https://wa.me/5512997398999?text=Olá,%20vi%20o%20seu%20anúncio%20e %20estou%20precisando%20de%20ajuda%20jurídica,%20poderia%20me%20ajudar%20com%20a%20minha%20questão?">55 (12) 99739-8999</a>
        </li>
        <li>
        <img src={instagramImg} alt="" />
          <a target='_blank' href="https://www.instagram.com/advocaciafreitascouto/">@advocaciafreitascouto</a>
        </li>
      </ul> */}
      </div>
    </footer>
  );
};
