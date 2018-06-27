import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from  './Home'
import Cart from  './Cart'

const Router = () => {
    return (
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/cart" exact component={Cart}/>
    </Switch>
    )
}

export default Router