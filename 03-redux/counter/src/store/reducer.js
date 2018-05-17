const initialState = {
    counter: 777
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD': return {
            counter: state.counter + action.value
        }
        case 'SUB': return {
            counter: state.counter - action.value
        }
        case 'INC': return {
            counter: state.counter + 1
        }
        case 'DEC': return {
            counter: state.counter - 1
        }
    }
    return state;
}

export default reducer;