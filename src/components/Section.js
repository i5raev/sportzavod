import React from "react";
import Catalog from "./Pages/Catalog";
import Contact from "./Pages/Contact";
import OurWork from "./Pages/OurWork";
import Home from "./Pages/Home";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
} from "react-router-dom";
const Section = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/catalog" component={Catalog} />
                    <Route exact path="/ourwork" component={OurWork} />
                    <Route exact path="/contact" component={Contact} />
                </Switch>
            </Router>
        </div>
    );
};

export default Section;
