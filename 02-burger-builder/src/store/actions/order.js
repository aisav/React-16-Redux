import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';
import order from "../../components/Order/Order";

export const purchaseBurgerSuccess = ( id, orderData ) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    };
};

export const purchaseBurgerFail = ( error ) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    };
}

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    };
};

export const purchaseBurger =  orderData  => dispatch => {

    dispatch(purchaseBurgerStart())
    axios.post( '/orders.json', order )
        .then( response => {
            dispatch(purchaseBurgerSuccess(response.data.name,order))
            this.props.history.push( '/' );
        } )
        .catch( error => {
            dispatch(purchaseBurgerFail(error))
        } );
}