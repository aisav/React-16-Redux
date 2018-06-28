import * as actionTypes from '../actions/actionTypes'

const initialState = {
    products: [],
    quantityById: {}
};

const reducer = (state = initialState, action) => {
    let index = state.products.indexOf(action.payload) //find current product in our pr. array
    let helpObj = {}
    let count

    switch (action.type) {
        case actionTypes.ADD:
            count = ((index === -1) ? 1 :  state.quantityById[action.payload.id] + 1)
            helpObj[action.payload.id]=count
            return {
                ...state,
                products: state.products.concat(action.payload),
                quantityById: {...state.quantityById, ...helpObj}
            }

        case actionTypes.REMOVE:
            if(index!==-1){
                count = state.quantityById[action.payload.id] - 1
                helpObj[action.payload.id]=count
            }

            return {
                ...state,
                products: state.products.filter((item, id) => id !== index),
                quantityById: {...state.quantityById, ...helpObj}
            }
        default:
            return state;
    }
}


export default reducer;