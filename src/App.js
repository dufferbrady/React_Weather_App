import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import SearchWeather from './containers/SearchWeather/SearchWeather'
import Weather from './containers/Weather/Weather'
import classes from './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFrown } from '@fortawesome/free-solid-svg-icons'

library.add(faFrown)

class App extends Component {
  render() {
    return (
      <div className={ classes.App }>
        <Layout>
          <Switch>
            <Route path="/forecast" component={ Weather }/>
            <Route path="/" exact component={ SearchWeather } />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
