import "./App.css";
import ComponentC from "./components/ComponentC";
import { UserProvider } from "./components/userContext";

function App() {
    return (
        // Everything goes inside this div tag
        <div className="App">
            {/* only the descendents of ComponentC can consume the 
                value provided in the context provider 
                The value is provided using the value attribute of the context provider*/}
            <UserProvider value="Abdur">
                <ComponentC />
            </UserProvider>
        </div>
    );
}

export default App;
