import * as actionTypes from './actions'

const initialState = {
    counter: 777,
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.val
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.val
            }
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), val: state.counter })
            }
        case actionTypes.DELETE_RESULT:
            return {
                ...state,
                results: state.results.filter(result => {
                    return result.id !== action.resultDeletedElId;
                })
            }
    }
    return state;
}


export default reducer;