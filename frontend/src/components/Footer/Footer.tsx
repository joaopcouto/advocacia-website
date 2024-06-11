import React from 'react'
import './styles.css'
import logoImg from '../../assets/images/logo.png'
import locationImg from '../../assets/icons/navigation-arrow-bold.svg'
import emailImg from '../../assets/icons/envelope-simple-bold.svg'
import phoneImg from '../../assets/icons/phone-bold.svg'
import whatsappImg from '../../assets/icons/whatsapp-logo-bold.svg'
import instagramImg from '../../assets/icons/instagram-logo-bold.svg'

export function Footer() {
  return (
    <footer>
      <div className='footer-content'>
        <div  className='footer-brand'>
       <img className='logoImg' src={logoImg} alt="logo" />
       <p className='text-oab'>OAB/SP 230.817 </p>
        </div>
       

      <div className='footer-contact'>

      <ul className='footer-list'>
        
        <li>
        <img src={locationImg} alt="" />
          Rua Capitão João José de Macedo, 340, 3° andar
        </li>
        <li>
          <img src={emailImg} alt="" />
          <a href="">advocaciafreitascouto@gmail.com</a>
        </li>
        <li>
          <img src={phoneImg} alt="" />
          <a href="">55 (12) 99739-8999</a>
        </li>
        <li>
        <img src={whatsappImg} alt="" />
          <a href="">55 (12) 99739-8999</a>
        </li>
        <li>
        <img src={instagramImg} alt="" />
          <a target='_blank' href="https://www.instagram.com/advocaciafreitascouto/">advocaciafreitascouto</a>
        </li>
      </ul>

      </div>


      </div>
    </footer>
  )
}