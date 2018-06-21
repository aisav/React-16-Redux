import React, {Component, Fragment} from 'react';
import {BrowserRouter} from 'react-router-dom';

import Blog from './containers/Blog/Blog';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <Header/>
                    <Blog/>
                </Fragment>
            </BrowserRouter>
        )
            ;
    }
}

export default App;
