import React, { Component } from 'react';

import Layout from './components/Layout/Layout'
import WeatherData from './containers/WeatherData/WeatherData'
import classes from './App.css';

class App extends Component {
  render() {
    return (
      <div className={ classes.App }>
        <Layout>
          <WeatherData />
        </Layout>
      </div>
    );
  }
}

export default App;
