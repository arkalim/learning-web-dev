import { BUY_BISCUIT } from "./biscuitTypes";

const initialState = {
    numBiscuits: 10,
};

const biscuitReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_BISCUIT:
            return {
                ...state,
                numBiscuits: state.numBiscuits - action.payload,
            };

        default:
            return state;
    }
};

export default biscuitReducer;
