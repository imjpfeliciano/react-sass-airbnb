import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './header';
import Inicio from './inicio';
import Convocatoria from './convocatoria';
import Resultados from './resultados';
import Material from './material';
import Anuncios from './anuncios';
import Contacto from './contacto';


class Main extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <Header />
        <Switch>
          <Route path='/convocatoria' component={Convocatoria} />
          <Route path='/resultados' component={Resultados} />
          <Route path='/material' component={Material} exact />
          <Route path='/anuncios' component={Anuncios} />
          <Route path='/contacto' component={Contacto} />
          <Route path='/' component={Inicio} exact />
        </Switch>
      </div>
    );
  }
}

export default Main;
