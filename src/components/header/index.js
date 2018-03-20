import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <NavLink to='/' className='navbar-brand'>OMI - QRoo</NavLink>

      <div className='collapse navbar-collapse'>
        <ul className='navbar-nav'>
          <li className='nav-item'><NavLink className='nav-link' to='/'>Inicio</NavLink></li>
          <li className='nav-item'><NavLink className='nav-link' to='/convocatoria'>Convocatoria</NavLink></li>
          <li className='nav-item'><NavLink className='nav-link' to='/resultados'>Resultados</NavLink></li>
          <li className='nav-item'><NavLink className='nav-link' to='/material'>Material</NavLink></li>
          <li className='nav-item'><NavLink className='nav-link' to='/anuncios'>Anuncios</NavLink></li>
          <li className='nav-item'><NavLink className='nav-link' to='/contacto'>Contacto</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
