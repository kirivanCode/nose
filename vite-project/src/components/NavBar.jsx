// NavBar.jsx
import React from 'react';
import '../styles/NavBar.css';
import carrito from '../icons/carrito.ico';
import { NavLink } from 'react-router-dom';
import Logo2 from '../images/Logo2.png';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={Logo2} alt="Logo de la aplicación" className="logo" />
      </div>
      <ul className="nav-list">
        <li className="nav-item"><NavLink to="/" className="active-link">Inicio</NavLink></li>
        <li className="nav-item"><NavLink to="/ProductList" className="active-link">Catálogo</NavLink></li>
        <li className="nav-item"><NavLink to="/AboutUsPage" className="active-link">Sobre Nosotros</NavLink></li>
        <li className='nav-item'><NavLink to="/SearchBar" className="active-link">search</NavLink></li>
        <li className="nav-item"><NavLink className="cart-link" to="/cart"><img className="icons" src={carrito} alt="Carrito" /></NavLink></li>
      </ul>
    </nav>
  );
};

export default NavBar;

