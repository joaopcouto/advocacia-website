import { React, useEffect, useState } from 'react';
import logoImg from '../../assets/images/logo.png';
import  './styles.css';

import { Link, NavLink, useLocation } from 'react-router-dom';


export const Header: React.FC = () => {
    
    const location = useLocation();

    useEffect(() => {
        const pathname = location.pathname;
        const encodedPathname = encodeURI(pathname);
        const selector = `a[href="${encodedPathname}"]`;
  
        // Encontre o link correspondente e aplique o estilo
        const link = document.querySelector(selector);
        if (link) {
          link.style.color = '#B4814A';
        }
  
  
        // Limpe o estilo do link anterior quando a rota mudar
        return () => {
            const previousLinks = document.querySelectorAll('nav a');
            previousLinks.forEach((link) => {
               link.style.color = '#B1997B'; // Cor padrão do link
            });
  
        }
    }, [location.pathname]);
  

  return (
    <header>
        <nav id='navbar'>

            <div className='nav-brand'>
                <Link to={'/'}>
                <img className='logoImg' id='nav' src={logoImg} alt="logo" />             
                </Link>
            </div>

           <ul className='nav-list'>
            <li>
                <Link to='/Home'>Home</Link>
            </li>
            <li>
                <Link to='/sobre'>Sobre</Link>
            </li>
            <li>
                <Link to='/especialidades'>Especialidades</Link>
            </li>
            <li>
                <Link to='/Noticias'>Notícias</Link>
            </li>
            <li>
                <Link to='/contato'>Contato</Link>
            </li>
           </ul>

        </nav>
    </header>
  )
}
