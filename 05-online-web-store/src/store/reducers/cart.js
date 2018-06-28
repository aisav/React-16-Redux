import * as actionTypes from '../actions/actionTypes'

const initialState = {
    products: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD:
            return {
                ...state,
                products: state.products.concat(action.productName)
            }

        case actionTypes.REMOVE:
            let index = state.products.indexOf(action.productName)
            return {
                ...state,
                products: state.products.filter((item, id) => id !== index)
            }
        default:
            return state;
    }
}


export default reducer;