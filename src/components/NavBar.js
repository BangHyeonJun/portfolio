import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const NavBar = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    {/* writing title on the top */}
                    <Typography variant="title" color="inherit">
                        UmNyaUm's Portfolio Blog
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavBar;
