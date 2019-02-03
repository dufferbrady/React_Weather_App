import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import SearchWeather from './containers/SearchWeather/SearchWeather'
import classes from './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faThermometerThreeQuarters } from '@fortawesome/free-solid-svg-icons'

library.add(faThermometerThreeQuarters)

class App extends Component {
  render() {
    return (
      <div className={ classes.App }>
        <Layout>
          <Switch>
            <Route path="/Current" render={() => (<div style={{"margin-top": "100px"}}>Hey There!</div>)} />
            <Route path="/" component={ SearchWeather } />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
