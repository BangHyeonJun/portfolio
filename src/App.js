import React, { Component } from "react";
import NavBar from "./components/NavBar";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div>
                {/* Calling Navigatoin Bar */}
                <NavBar />
            </div>
        );
    }
}

export default App;
