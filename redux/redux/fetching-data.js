import redux from "redux";
import axios from "axios";
import thunk from "redux-thunk";

const url = "https://jsonplaceholder.typicode.com/posts";

// -------- Initial State ----------
const initialState = {
    loading: false,
    users: [],
    error: "",
};

// ----------- Actions -------------

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST,
    };
};

const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users,
    };
};

const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error,
    };
};

// action creator which returns functions
// this is supported due to redux-thunk
const fetchUsers = () => {
    // the returned function has access to store.dispatch() method
    return (dispatch) => {
        // before fetching the data, set loading: true
        dispatch(fetchUsersRequest());

        // fetch the data
        axios
            .get(url)
            .then((response) => {
                // response.data is the array of users
                const users = response.data.map((user) => user.id);
                dispatch(fetchUsersSuccess(users));
            })
            .catch((error) => {
                // error.message is the error message
                dispatch(fetchUsersFailure(error.message));
            });
    };
};

// ----------- Reducers ------------

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: "",
            };

        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload,
            };
    }
};

// ----------- Store -------------

// create a store and apply the redux-thunk middleware
// thunk must be applied using thunk.default
const store = redux.createStore(reducer, redux.applyMiddleware(thunk.default));

// subscribe the logging function
const unsubscribe = store.subscribe(() => console.log(store.getState()));

// dispatch the action creator asynchronously
store.dispatch(fetchUsers());

// can't unsubscribe right away as the fetchusers() is being handled asynchronously
