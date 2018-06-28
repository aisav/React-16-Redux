import * as actionTypes from './actionTypes'

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

// export const storeResult = (result) => {
//     return dispatch => {
//         setTimeout(() => {
//             dispatch(saveResult(result))
//         }, 2000);
//     }
//
// }


