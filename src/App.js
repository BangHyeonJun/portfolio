import React, { Component, Fragment } from "react";
import BottomNav from "./components/BottomNavigation";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "routes/Home";
import About from "routes/About";
import Project from "routes/Project";
import Contact from "routes/Contact";

class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <NavBar />
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/project" component={Project} />
                    <Route path="/contact" component={Contact} />
                    <BottomNav />
                </Fragment>
            </Router>
        );
    }
}

export default App;
