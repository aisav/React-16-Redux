import * as actionTypes from '../actions/actionTypes'

const initialState = {
    products: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD:
            return {
                ...state,
                products: state.products.concat(action.payload)
            }

        case actionTypes.REMOVE:
            let index = state.products.indexOf(action.payload)
            return {
                ...state,
                products: state.products.filter((item, id) => id !== index)
            }
        default:
            return state;
    }
}


export default reducer;