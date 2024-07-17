import React from 'react'
import './styles.css'
import locationImg from '../../assets/icons/navigation-arrow-bold-black.svg'
import emailImg from '../../assets/icons/envelope-simple-bold-black.svg'
import phoneImg from '../../assets/icons/phone-bold-black.svg'
import whatsappImg from '../../assets/icons/whatsapp-logo-bold-black.svg'
import instagramImg from '../../assets/icons/instagram-logo-bold-black.svg'

export const Contact: React.FC = () => {
  return (
    <>
    <h2 className='contact-title'>Contato</h2>
    <main>
    <section className='mapAndInfo'>
    <div className="contact-main">
      <div className='map'>
      
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.2650063308856!2d-45.976020823846284!3d-23.306141852267128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cdcb64fbe15443%3A0x38d37d94723646ce!2sR.%20Cap.%20Jo%C3%A3o%20Jos%C3%A9%20de%20Macedo%2C%20340%20-%20Centro%2C%20Jacare%C3%AD%20-%20SP%2C%2012327-030!5e0!3m2!1spt-BR!2sbr!4v1718316753703!5m2!1spt-BR!2sbr" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      </div>
      
      <div className='contact-info'>

          <ul className='contact-list'>
          <li>
          <img src={locationImg} alt="" />
            <span>Rua Capitão João José de Macedo, <br/> 340, 3° andar </span>
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
          </ul>
      </div>
    </div>
    </section>

    <section className='Form'>
      <div>
        <form>
          <h1>Entre em contato conosco!</h1>
          <input type="text" />
        </form>
      </div>
    </section>
    </main>

    </>
  )
}
