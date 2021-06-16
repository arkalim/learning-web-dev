import redux from "redux";

// initial state
// must be an object
const initialState = {
    numCakes: 10,
};

// --------- Action -----------

// action creator
// returns an object with a type property
const buyCake = () => {
    return {
        type: "BUY_CAKE",
    };
};

// --------- Reducer -----------

// notice that we aren't mutating the state object
// we are returning a new object
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "BUY_CAKE":
            return {
                ...state,
                numCakes: state.numCakes - 1,
            };

        default:
            return state;
    }
};

// --------- Store -----------

// create store
const store = redux.createStore(reducer);

// access the state
const currentState = store.getState();
console.log("Initial State", currentState);

// listener function
// called everytime the state is updated
const listener = () => console.log("Updated State", store.getState());

// listener subscribes to the store
// it returns a function to unsubscribe
const unsubscribe = store.subscribe(listener);

// update the state
// for every update, listener will be called
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

// unsubscribe from store
unsubscribe();
