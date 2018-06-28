import * as actionTypes from './actionTypes'
import data from '../../data/products.json';

export const addProduct = ( product ) => {
    return {
        type: actionTypes.ADD,
         payload: product
    };
};

export const removeProduct = ( product ) => {
    return {
        type: actionTypes.REMOVE,
        payload: product
    };
};

export const loadData = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch(getProductsList())
        }, 2000);
    }
}

export const getProductsList = () => {
    return {
        type: actionTypes.GET_ALL,
        payload: data.products
    }
}







// export const storeResult = (result) => {
//     return dispatch => {
//         setTimeout(() => {
//             dispatch(saveResult(result))
//         }, 2000);
//     }
//
// }


