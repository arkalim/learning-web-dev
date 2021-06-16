import React from "react";
import { buyCake } from "../redux/cake/cakeActions";
import { useSelector, useDispatch } from "react-redux";

const CakeHooks = () => {
    // access the redux state and store it in numCakes
    const numCakes = useSelector((state) => state.cake.numCakes);

    // access the dispatch method of the redux store in this component
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Number of Cakes: {numCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    );
};

export default CakeHooks;
