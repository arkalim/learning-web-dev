import { createStore, combineReducers, applyMiddleware } from "redux";
import cakeReducer from "./cake/cakeReducer";
import biscuitReducer from "./biscuit/biscuitReducer";

// redux logger
import logger from "redux-logger";

// redux devtools
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
    cake: cakeReducer,
    biscuit: biscuitReducer,
});

// create a store with the redux logger middleware and redux devtools
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(logger))
);

export default store;
