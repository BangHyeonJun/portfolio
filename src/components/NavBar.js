import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Headroom from "react-headroom";
import "components/NavBar.css";

class NavBar extends Component {
    render() {
        return (
            <Headroom>
                <div id="navbarContainer">
                    <AppBar position="static">
                        <Toolbar>
                            {/* writing title on the top */}
                            <Typography variant="title" color="inherit">
                                UmNyaUm's Portfolio Blog
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </div>
            </Headroom>
        );
    }
}

export default NavBar;
