import { buyCake } from "./cakeActions";

// function that maps the redux state to the component props
// this will allow the component to access the redux state as props.numCakes
export const mapStateToProps = (state) => {
    return {
        numCakes: state.numCakes,
    };
};

// function that maps the dispatch method to the component props
// this will allow the component to dispatch the action using props.buyCake()
export const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake()),
    };
};
