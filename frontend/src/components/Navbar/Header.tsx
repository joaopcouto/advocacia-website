import React from 'react';
import logoImg from '../../assets/images/logo.png'
import  './styles.css'


export function Header() {
  return (
    <header>
        <nav id='navbar'>
            <div className='nav-brand'>
                <img className='logoImg' src={logoImg} alt="logo" />             
            </div>

           <ul className='nav-list'>
            <li>
                <a href="/">Institucional</a>
            </li>
            <li>
                <a href="/">Especialidades</a>
            </li>
            <li>
                <a href="/">Contato</a>
            </li>
           </ul>
    
        </nav>
    </header>
  )
}
