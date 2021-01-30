import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
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
const Header = () => {
    return (
        <Router>
            <div className="container">
                <header>
                    <Navbar variant="dark" className="nav">
                        <Navbar.Brand>SportZavod</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Главная</Nav.Link>
                            <Nav.Link href="/catalog">Каталог</Nav.Link>
                            <Nav.Link href="/ourwork">Наши работы</Nav.Link>
                            <Nav.Link href="/contact">Контакты</Nav.Link>
                        </Nav>
                    </Navbar>
                </header>
            </div>
        </Router>
    );
};

export default Header;
