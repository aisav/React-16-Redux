import React, { Component } from 'react';
import { Route, Switch, BrowserRouter  } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Orders from './containers/Orders/Orders';

class App extends Component {
  render() {
    return (
      <BrowserRouter  >
        <Layout>
            <Switch>
                <Route path="/orders" component={Orders} />
                <Route path="/" exact component={BurgerBuilder} />
            </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
