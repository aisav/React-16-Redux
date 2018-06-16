import React, { Component } from 'react';
import { Route, Switch, BrowserRouter  } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import asyncComponent from './hoc/asyncComponent/asyncComponent';


const asyncCheckout = asyncComponent(() => {
    return import('./containers/Checkout/Checkout');
});

const asyncOrders = asyncComponent(() => {
    return import('./containers/Orders/Orders');
});


class App extends Component {
  render() {
    return (
      <BrowserRouter  >
        <Layout>
            <Switch>
                <Route path="/orders" component={asyncOrders} />
                <Route path="/checkout" component={asyncCheckout} />
                <Route path="/" exact component={BurgerBuilder} />
            </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
