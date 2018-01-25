import React from 'react';
import ReactDOM from 'react-dom';
import './_global.scss';

const App = () => {
  return (
    <div className='MainApp'>
      My first React Project!
      <div className='row'>
        <span>
          <img
            src='./assets/react-logo.png'
            height='150'
            width='150'
            alt='react'
          />
        </span>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('.app'));
