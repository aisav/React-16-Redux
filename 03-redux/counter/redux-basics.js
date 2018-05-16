const redux = require ('redux'); //node import syntax

const initialState = {
    counter: 0
};
//Reducer
const rootReducer = (state = initialState, action) => {
    return state;
}
//Store
const store = redux.createStore(rootReducer);
console.log(store.getState());