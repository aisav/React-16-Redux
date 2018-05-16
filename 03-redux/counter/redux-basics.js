const redux = require ('redux'); //node import syntax

const initialState = {
    counter: 0
};
//Reducer
const rootReducer = (state = initialState, action) => {
    if(action.type === 'ADD'){
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    return state;
};

//Store
const store = redux.createStore(rootReducer);
console.log(store.getState());

//Dispatching Action
store.dispatch({type: 'ADD', value: 10});
console.log(store.getState());
