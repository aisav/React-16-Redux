import React, {Component} from 'react';

import Navigation from './components/Navigation'
import Router from './components/Router'
import './App.css';


class App extends Component {
    render() {
        return (
                <div className="page-container">
                    <Navigation/>
                    <Router/>
                </div>
        );
    }
}

export default App;
