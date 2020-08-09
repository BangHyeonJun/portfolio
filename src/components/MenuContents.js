// This file is shared across the demos.

import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import NoteIcon from "@material-ui/icons/Note";
import PersonIcon from "@material-ui/icons/Person";
import HomeIcon from "@material-ui/icons/Home";
import MailIcon from "@material-ui/icons/Mail";

export const TopListItems = (
    <div>
        {/* Home Icon */}
        <ListItem button>
            <ListItemIcon>
                <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
        </ListItem>
        {/* About Icon */}
        <ListItem button>
            <ListItemIcon>
                <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
        </ListItem>
        {/* Project Icon */}
        <ListItem button>
            <ListItemIcon>
                <NoteIcon />
            </ListItemIcon>
            <ListItemText primary="Project" />
        </ListItem>
        {/* Contact Icon */}
        <ListItem button>
            <ListItemIcon>
                <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" />
        </ListItem>
    </div>
);

export const BottomListItems = <div />;
