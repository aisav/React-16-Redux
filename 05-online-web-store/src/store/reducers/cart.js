import * as actionTypes from '../actions/actionTypes'

const initialState = {
    products: [],
    quantityById: {}
};

const reducer = (state = initialState, action) => {
    let index = state.products.indexOf(action.payload) //find current product in our pr. array
    let helpObj = {}
    let count
    let products = state.products

    switch (action.type) {
        case actionTypes.ADD:
            if (index === -1) {
                count = 1
                products.push(action.payload)
            }
            else {
                count = state.quantityById[action.payload.id] + 1
            }
            helpObj[action.payload.id] = count
            return {
                ...state,
                products,
                quantityById: {...state.quantityById, ...helpObj}
            }

        case
        actionTypes.REMOVE
        :
            if (index >= 0) {
                count = state.quantityById[action.payload.id] - 1
                helpObj[action.payload.id] = count
            }
            if(count===0) {
                products = products.filter((item, id) => id !== index)
            }

            return {
                ...state,
                products,
                quantityById: {...state.quantityById, ...helpObj}
            }
        default:
            return state;
    }
}


export default reducer;