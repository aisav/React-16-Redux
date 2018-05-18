const initialState = {
    counter: 777,
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD': return {
            ...state,
            counter: state.counter + action.value
        }
        case 'SUB': return {
            ...state,
            counter: state.counter - action.value
        }
        case 'INC': return {
            ...state,
            counter: state.counter + 1
        }
        case 'DEC': return {
            ...state,
            counter: state.counter - 1
        }
        case 'STORE_RESULT': return {
            ...state,
            results: state.results.concat(state.counter)
        }
    }
    return state;
}

export default reducer;