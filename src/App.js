import React from "react";
import Home from "./components/Pages/Home";
import Section from "./components/Section";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
} from "react-router-dom";

function App() {
    return (
        <div>
            <Router>
                <Home />
                <Section />
            </Router>
        </div>
    );
}
export default App;
