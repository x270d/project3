import React from 'react'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-scroll";

export default function Banner() {
    return (
        <div className="banner">
            <Grid container>
                <Grid item lg={6} md={7} xs={12} >
                    <Typography variant="h1" component="h1" gutterBottom>
                        Test assignment for Frontend Developer position
                    </Typography>
                    <Typography variant="subtitle1" component="p" >
                        We kindly remind you that your test assignment should
                        be submitted as a link to github/bitbucket repository.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Hidden smDown>
                    <Grid item xl={6} lg={6} md={7} xs={12}>
                        <Typography variant="subtitle1" component="span" >
                            Please be patient, we consider and respond to every application
                            that meets minimum requirements. We look forward to your submission. Good luck!
                        </Typography>
                    </Grid>
                </Hidden>
            </Grid>
            <Grid container>
                <Grid item md={6} xs={12}>

                    <Button
                        component={Link}
                        to="sign-up"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="banner-btn"
                        size="large"
                        variant="contained"
                        color="primary"
                        aria-label="Sign Up"
                    >
                        Sign Up
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}
