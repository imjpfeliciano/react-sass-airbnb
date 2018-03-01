import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import Inicio from './Inicio';
import Convocatoria from './Convocatoria';
import Resultados from './Resultados';
import Material from './Material';
import Anuncios from './Anuncios';
import Contacto from './Contacto';


class Main extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <ul>
          <li><NavLink to='/' exact >Inicio</NavLink></li>
          <li><NavLink to='/convocatoria' exact >Convocatoria</NavLink></li>
          <li><NavLink to='/resultados' exact >Resultados</NavLink></li>
          <li><NavLink to='/material' exact >Material</NavLink></li>
          <li><NavLink to='/anuncios' exact >Anuncios</NavLink></li>
          <li><NavLink to='/contacto' exact >Contacto</NavLink></li>
        </ul>
        <Switch>
          <Route path='/convocatoria' component={Convocatoria} exact />
          <Route path='/resultados' component={Resultados} />
          <Route path='/material' component={Material} />
          <Route path='/anuncios' component={Anuncios} />
          <Route path='/contacto' component={Contacto} />
          <Route path='/' component={Inicio} />
        </Switch>
      </div>
    );
  }
}

export default Main;
