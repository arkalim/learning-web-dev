import React from "react";
import { connect } from "react-redux";

import {
    mapStateToProps,
    mapDispatchToProps,
} from "../redux/cake/cakeSelector";

const Cake = (props) => {
    return (
        <div>
            <h2>Number of Cakes: {props.numCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    );
};

// connect the redux state and the action creator to the component
export default connect(mapStateToProps, mapDispatchToProps)(Cake);
