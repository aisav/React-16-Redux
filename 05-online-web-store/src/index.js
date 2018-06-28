import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter  } from 'react-router-dom';
import {createStore, compose, combineReducers} from 'redux';
// import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

import cartReducer from './store/reducers/cart';


import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
    cart: cartReducer
    // order: orderReducer
})

const store = createStore(reducer, composeEnhancers(
    // applyMiddleware(thunk)
));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
