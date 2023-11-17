import React from 'react';
import '../styles/Footer.css';
import facebook from '../icons/facebook.ico';
import whatsapp from '../icons/whatsapp.ico';

const Footer = () => {
  return (
    <footer className="footer-container">
      <p>Derechos de autor, los que se matan haciendo la página</p>
      <p>En este momento no hay tiendas físicas</p>

      {/*
 <div className= "footer-icons">
      <a href="https://www.facebook.com/ivan" target="_blank" rel="noopener noreferrer">
        <img className= "fotter-icons1"src={facebook} alt=" facebook imagen" />
      </a>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target="_blank" rel="noopener noreferrer">
        <img className= "fotter-icons1" src={whatsapp} alt=" whatsapp imagen" />
      </a>
      </div>
      */

      }
     

    </footer>
  );
};

export default Footer;