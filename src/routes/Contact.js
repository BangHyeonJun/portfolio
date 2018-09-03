import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    contactContainer: {
        float: "left",
        width: "100%"
    },
    heroUnit: {
        backgroundColor: theme.palette.background.paper
    },
    heroContent: {
        maxWidth: 600,
        margin: "0 auto",
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
    },
    heroButtons: {
        marginTop: theme.spacing.unit * 4
    }
});

function Album(props) {
    const { classes } = props;

    return (
        <main className={classes.contactContainer}>
            {/* Hero unit */}
            <div className={classes.heroUnit}>
                <div className={classes.heroContent}>
                    <Typography
                        variant="display3"
                        align="center"
                        color="textPrimary"
                        gutterBottom
                    >
                        방문해 주셔서 감사합니다
                    </Typography>
                    <Typography
                        variant="title"
                        align="center"
                        color="textSecondary"
                        paragraph
                    >
                        이곳은 저의 블로그의 마지막 페이지인 Contact페이지
                        입니다.
                        <br />
                        좋은 경험이 되셨길 바랍니다.
                        <br />
                        만약 저와의 연락을 원하시거나 요구사항이 있을경우
                        <br />이 페이지를 통해 연락 주시길 바랍니다.
                    </Typography>
                    <div className={classes.heroButtons}>
                        <Grid container spacing={16} justify="center">
                            <Grid item>
                                <Button variant="contained" color="primary">
                                    Main call to action
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" color="primary">
                                    Secondary action
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </main>
    );
}

Album.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Album);
