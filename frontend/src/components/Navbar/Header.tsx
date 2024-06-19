import { React, useState } from 'react';
import logoImg from '../../assets/images/logo.png';
import  './styles.css';

import { Link } from 'react-router-dom';


export const Header: React.FC = () => {
  return (
    <header>
        <nav id='navbar'>

            <div className='nav-brand'>
                <Link to={'/'}>
                <img className='logoImg' src={logoImg} alt="logo" />             
                </Link>
            </div>

           <ul className='nav-list'>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/institucional'>Institucional</Link>
            </li>
            <li>
                <Link to='/especialidades'>Especialidades</Link>
            </li>
            <li>
                <Link to='/contato'>Contato</Link>
            </li>
           </ul>

        </nav>
    </header>
  )
}
