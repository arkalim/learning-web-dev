import redux from "redux";

// ----- Initial States -------

const initialCakeState = {
    numCakes: 10,
};

const initialBiscuitState = {
    numBiscuits: 20,
};

// --------- Actions -----------

const buyCake = () => {
    return {
        type: "BUY_CAKE",
    };
};

const buyBiscuit = () => {
    return {
        type: "BUY_BISCUIT",
    };
};

// --------- Reducers -----------

const cakeReducer = (state = initialCakeState, action) => {
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

const biscuitReducer = (state = initialBiscuitState, action) => {
    switch (action.type) {
        case "BUY_BISCUIT":
            return {
                ...state,
                numBiscuits: state.numBiscuits - 1,
            };

        default:
            return state;
    }
};

// --------- Store -----------

// combine the reducers
const rootReducer = redux.combineReducers({
    cake: cakeReducer,
    biscuit: biscuitReducer,
});

// create store using rootReducer
const store = redux.createStore(rootReducer);

// access the state
const currentState = store.getState();
console.log("Initial State", currentState);

// listener function
const listener = () => console.log("Updated State", store.getState());

// listener subscribes to the store
const unsubscribe = store.subscribe(listener);

// update the state
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyBiscuit());
store.dispatch(buyBiscuit());

// unsubscribe from store
unsubscribe();
