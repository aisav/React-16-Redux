import * as actionTypes from '../actions/actionTypes'

const initialState = {
    products: [],
    quantityById: {},
    loading: true
};


const reducer = (state = initialState, action) => {
    let helpObj = {}
    let count

    switch (action.type) {
        /////////////////////////////////////////////////////////////////////////////////////////// ADD ///////////////
        case actionTypes.ADD:
            if (state.quantityById[action.payload.id] !== undefined)
                count = state.quantityById[action.payload.id] + 1
            else count = 1

            helpObj[action.payload.id] = count

            return {
                ...state,
                quantityById: {...state.quantityById, ...helpObj}
            }
        ////////////////////////////////////////////////////////////////////////////////////////// REMOVE /////////////
        case actionTypes.REMOVE:
            if (state.quantityById[action.payload.id] > 0) {
                count = state.quantityById[action.payload.id] - 1
            }
            else{
                count = 0
            }

            helpObj[action.payload.id] = count

            return {
                ...state,
                quantityById: {...state.quantityById, ...helpObj}
            }
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
        case actionTypes.GET_ALL:
            return {
                ...state,
                products: action.payload,
                loading: false
            }
        default:
            return state;
    }
}


export default reducer;