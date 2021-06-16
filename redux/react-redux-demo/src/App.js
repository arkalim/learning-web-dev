import "./App.css";
import Cake from "./components/Cake";
import store from "./redux/store";

// required to provide the store to the React application
import { Provider } from "react-redux";

function App() {
    return (
        // wrap the entire app in the provider component so that
        // the store can be accessed anywhere in the entire component tree
        <Provider store={store}>
            <div className="App">
                <Cake />
            </div>
        </Provider>
    );
}

export default App;
