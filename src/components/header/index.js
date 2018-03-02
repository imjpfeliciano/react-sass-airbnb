import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <ul>
      <li><NavLink to='/' >Inicio</NavLink></li>
      <li><NavLink to='/convocatoria' >Convocatoria</NavLink></li>
      <li><NavLink to='/resultados' >Resultados</NavLink></li>
      <li><NavLink to='/material' >Material</NavLink></li>
      <li><NavLink to='/anuncios' >Anuncios</NavLink></li>
      <li><NavLink to='/contacto' >Contacto</NavLink></li>
    </ul>
  );
};

export default Header;
