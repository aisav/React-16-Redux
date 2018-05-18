const initialState = {
    counter: 777,
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.val
            }
        case 'SUB':
            return {
                ...state,
                counter: state.counter - action.val
            }
        case 'INC':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'DEC':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({id: new Date(), val: state.counter })
            }
        case 'DELETE_RESULT':
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