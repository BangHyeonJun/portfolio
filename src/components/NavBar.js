import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const NavBar = () => {
    const TempPropTypes = PropTypes.object.isRequired;
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        className={TempPropTypes.menuButton}
                        color="inherit"
                        aria-label="Menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit">
                        UmNyaUm's Portfolio Blog
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavBar;
