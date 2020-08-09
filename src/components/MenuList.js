import React, { Component, Fragment } from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import PropTypes from "prop-types";
import { TopListItems, BottomListItems } from "./MenuContents";

class MenuList extends Component {
    state = {
        Menu: false
    };

    toggleDrawer = value => {
        /* deciding open and close about menu */
        this.setState({
            Menu: value
        });
    };

    render() {
        const TempPropTypes = PropTypes.object.isRequired;

        const sideList = (
            <div className={TempPropTypes.list}>
                <List>{TopListItems}</List>
                {/* <Divider /> <--- Drawing menu line */}
                <List>{BottomListItems}</List>
            </div>
        );
        return (
            <Fragment>
                {/* Drawing Menu Icon */}
                <IconButton
                    className={TempPropTypes.menuButton}
                    color="inherit"
                    aria-label="Menu"
                    onClick={() => this.toggleDrawer(true)}
                >
                    <MenuIcon />
                </IconButton>
                {/* Drawing Menu */}
                <Drawer
                    open={this.state.Menu}
                    onClose={() => this.toggleDrawer(false)}
                >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={() => this.toggleDrawer(false)}
                        onKeyDown={() => this.toggleDrawer(false)}
                    >
                        {sideList}
                    </div>
                </Drawer>
            </Fragment>
        );
    }
}

export default MenuList;
