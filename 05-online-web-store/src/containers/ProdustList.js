import React, {Component} from 'react';
import {connect} from 'react-redux';

import Product from '../components/Product'
import * as actions from '../store/actions/index';

class ProdustList extends Component {
    componentDidMount() {
        this.props.onLoadData()
    }
    render() {
        let products = this.props.cart.products.map(product => {
            return (
                    <Product key={product.id}
                             product={product}
                             added={() => this.props.onAddToCart(product)}
                             removed={() => this.props.onRemoveFromCart(product)}
                             cart={this.props.cart}/>
            )
        });
        return (
            <div className="product-list">
                {products}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAddToCart: (product) => dispatch(actions.addProduct(product)),
        onRemoveFromCart: (product) => dispatch(actions.removeProduct(product)),
        onLoadData: () => dispatch(actions.loadData()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProdustList)