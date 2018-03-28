import React, { Component } from 'react';

import Hero from './hero';
import NewsFeeds from './newsFeeds';

class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <NewsFeeds />
      </div>
    );
  }
}

export default Home;
