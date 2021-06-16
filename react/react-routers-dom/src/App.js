import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Description from "./components/Description";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Error from "./pages/Error";

// react router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                {/* Nav should be displayed in all the pages. 
                So, nav will not re-render when we switch pages */}
                <Nav />

                {/* Once a url matches in the order, don't render any other <Route> */}
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contacts" exact component={Contacts} />

                    {/* Dynamic Routing */}
                    {/* Description will be rendered if any link of type 
                        /contacts/id is visited and id will be sent as a param to Description */}
                    <Route path="/contacts/:id" component={Description} />

                    {/* path="*" will match any url */}
                    <Route path="*" component={Error} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
