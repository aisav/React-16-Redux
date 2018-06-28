import React from 'react';

import ProdustList from '../containers/ProdustList';
import data from '../data/products.json';



const Home = () => {
    return (<div>
        <h1>Home</h1>
        <ProdustList products={data.products}/>
    </div>)
}

export default Home