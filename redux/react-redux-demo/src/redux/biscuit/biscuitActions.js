import { BUY_BISCUIT } from "./biscuitTypes";

// setting a default value of number is a good idea
export const buyBiscuit = (number = 1) => {
    return {
        type: BUY_BISCUIT,

        // payload is the convention used to pass arguments to the action
        payload: number,
    };
};
