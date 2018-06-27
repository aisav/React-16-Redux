import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';

import Navigation from './components/Navigation'
import Router from './components/Router'
import './App.css';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navigation/>
                    <Router/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
