import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import './_global.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
};


ReactDOM.render(<App />, document.querySelector('.app'));
