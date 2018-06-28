import * as actionTypes from './actionTypes'

export const addProduct = ( name ) => {
    return {
        type: actionTypes.ADD,
        productName: name
    };
};

export const removeProduct = ( name ) => {
    return {
        type: actionTypes.REMOVE,
        productName: name
    };
};

// export const storeResult = (result) => {
//     return dispatch => {
//         setTimeout(() => {
//             dispatch(saveResult(result))
//         }, 2000);
//     }
//
// }


