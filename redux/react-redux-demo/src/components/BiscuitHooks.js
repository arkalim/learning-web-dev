import React, { useState } from "react";
import { buyBiscuit } from "../redux/biscuit/biscuitActions";
import { useSelector, useDispatch } from "react-redux";

const BiscuitHooks = () => {
    // number of biscuits to buy
    const [number, setNumber] = useState(1);

    // access the redux state and store it in numBiscuits
    const numBiscuits = useSelector((state) => state.biscuit.numBiscuits);

    // access the dispatch method of the redux store in this component
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Number of Biscuits: {numBiscuits}</h2>
            <input
                type="text"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />
            {/* pass the number as an arument to the action creator */}
            <button onClick={() => dispatch(buyBiscuit(number))}>
                Buy {number} Cake
            </button>
        </div>
    );
};

export default BiscuitHooks;
