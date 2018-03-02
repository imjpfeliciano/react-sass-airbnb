import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './header';
import Home from './home';
import Application from './application';
import Results from './results';
import Resources from './resources';
import Announcements from './announcements';
import Contact from './contact';


class Main extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <Header />
        <Switch>
          <Route path='/convocatoria' component={Application} />
          <Route path='/resultados' component={Results} />
          <Route path='/material' component={Resources} exact />
          <Route path='/anuncios' component={Announcements} />
          <Route path='/contacto' component={Contact} />
          <Route path='/' component={Home} exact />
        </Switch>
      </div>
    );
  }
}

export default Main;
