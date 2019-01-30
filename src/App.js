import React, { Component } from 'react';

import Layout from './components/Layout/Layout'
import WeatherData from './containers/WeatherData/WeatherData'
import classes from './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThermometerThreeQuarters } from '@fortawesome/free-solid-svg-icons'

library.add(faThermometerThreeQuarters)

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
