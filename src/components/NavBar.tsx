import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Hamburger } from '../assets/logo.svg';
import { ReactComponent as Brand } from '../assets/logo.svg';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import FlexLogo from './FlexLogo';
import logo from '../assets/logo.jpg'

const Navbar: FC = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);

  const handleShowNavbar = (): void => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div>
        <FlexLogo src={logo} alt='Logo' />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
           <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
          >
            <MenuIcon />
            </IconButton>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Accueil</NavLink>
            </li>
            <li>
              <NavLink to="/Reservations">Réservations</NavLink>
            </li>
            <li>
              <NavLink to="/Services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/Apropos">A Propos</NavLink>
            </li>
            <li>
              <NavLink to="/Contacts">Contacts</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;