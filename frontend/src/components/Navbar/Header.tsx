import { React, useState } from 'react';
import logoImg from '../../assets/images/logo.png'
import  './styles.css'


export const Header = () => {



  return (
    <header>
        <nav id='navbar'>

            <div className='nav-brand'>
                <img className='logoImg' src={logoImg} alt="logo" />             
            </div>

           <ul className='nav-list'>
            <li>
                <button onClick={() => {
                    
                }}>Institucional</button>
            </li>
            <li>
                <button>Especialidades</button>
            </li>
            <li>
                <button>Contato</button>
            </li>
           </ul>

        </nav>
    </header>
  )
}
