import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import NoteIcon from "@material-ui/icons/Note";
import PersonIcon from "@material-ui/icons/Person";
import HomeIcon from "@material-ui/icons/Home";
import MailIcon from "@material-ui/icons/Mail";

import "components/BottomNavigation.css";

const styles = {
    root: {
        position: "absolute",
        bottom: "0px"
    },
    content: {
        maxWidth: "100%"
    }
};

class SimpleBottomNavigation extends React.Component {
    state = {
        value: 0
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <BottomNavigation
                id="bottomNav"
                value={value}
                onChange={this.handleChange}
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction
                    className={classes.content}
                    label="Home"
                    value="Home"
                    icon={<HomeIcon />}
                    component={Link}
                    to="/"
                    button="true"
                />
                <BottomNavigationAction
                    className={classes.content}
                    label="About"
                    value="About"
                    icon={<PersonIcon />}
                    component={Link}
                    to="/about"
                    button="true"
                />
                <BottomNavigationAction
                    className={classes.content}
                    label="Project"
                    value="Project"
                    icon={<NoteIcon />}
                    component={Link}
                    to="/project"
                    button="true"
                />
                <BottomNavigationAction
                    className={classes.content}
                    label="Contact"
                    value="Contact"
                    icon={<MailIcon />}
                    component={Link}
                    to="/contact"
                    button="true"
                />
            </BottomNavigation>
        );
    }
}

SimpleBottomNavigation.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleBottomNavigation);
