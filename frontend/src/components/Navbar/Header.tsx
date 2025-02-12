import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logoImg from "../../assets/images/logo.png";
import "./styles.css";

import { Link, useLocation } from "react-router-dom";

export const Header: React.FC = () => {
  const location = useLocation();

  const navRef = useRef<HTMLUListElement>(null);
  const [isNavOpen, setIsNavOpen] = useState(false); 

  const showNavbar = () => {
    if (navRef.current) {
      navRef.current.classList.toggle("responsive_nav");
      setIsNavOpen(!isNavOpen);
    } 
  };

  useEffect(() => {
    const pathname = location.pathname;
    const encodedPathname = encodeURI(pathname);

    // Codifica caracteres especiais em uma string URI, como espaços e outros caracteres que podem causar problemas em URLs, garantindo que o caminho seja um valor válido para ser utilizado como um seletor de CSS

    const selector = `a[href="${encodedPathname}"]`;

    // Criação de um seletor CSS, selecionado todos os elementos a que tenham um atributo href cujo valor seja igual a encodedPathname

    // Encontre o link correspondente e aplique o estilo
    const link: HTMLElement | null = document.querySelector(selector);
    // Seleciona o primeiro elemento da página que corresponde ao seletor CSS fornecido.
    if (link) {
      link.style.color = "var(--global-secondary-color)";
    }

    // Essa função será executada antes que o efeito seja executado novamente, ou seja, sempre que o valor de location.pathname mudar
    return () => {
      const previousLinks: NodeListOf<HTMLAnchorElement> =
        document.querySelectorAll("nav a");
      previousLinks.forEach((link) => {
        link.style.color = "#B1997B"; // Cor padrão do link
      });
    };
  }, [location.pathname]);

  return (
    <header>
      <nav ref={navRef} id="navbar">
        <div className="nav-brand">
          <Link to={"/"}>
          <img className= "logoImgHeader"  id="nav" src={logoImg} alt="logo"/>
          </Link>
        </div>
        <ul className="nav-list">
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/especialidades">Especialidades</Link>
          </li>
          <li>
            <Link to="/Noticias">Notícias</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes></FaTimes>
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars></FaBars>
      </button>
    </header>
  );
};
