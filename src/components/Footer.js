import React from 'react'
import { Grid, Typography, Link, Hidden } from '@material-ui/core'
import BottomNavTop from './BottomNavTop'
import IconMail from './icon/IconMail'
import IconCellphone from './icon/IconCellphone'
import IconPhone from './icon/IconPhone'
import { makeStyles } from '@material-ui/core/styles'
import orange from '@material-ui/core/colors/orange'
import Copuring from './Copuring'

const useStyles = makeStyles(theme => ({
    contact: {
        textAlign: 'left',
        display: 'flex',
        alignItems: 'center',
        paddingBottom: 10
    },
    icon: {
        marginRight: 10
    },
    link: {
        color: '#fff',
        "&:hover": {
            color: orange[800],

        }
    }
}))

export default function Footer() {
    const classes = useStyles()
    const preventDefault = event => event.preventDefault();
    return (
        <div className="footer">
            <BottomNavTop />
            <Grid container justify="center"  >
                <Grid item container>
                    <hr style={{ width: '100%' }} />
                </Grid>
            </Grid>

            <div className="footer-nav-bottom">
                <Grid container>
                    <Grid item xl={3} md={4} xs={12}>
                        <div className="footer-contact">
                            <Typography className={classes.contact} variant="subtitle1" gutterBottom component="p">
                                <Hidden smDown><IconMail className={classes.icon} /></Hidden> work.of.future@gmail.com
                            </Typography>
                            <Typography className={classes.contact} variant="subtitle1" gutterBottom component="p">
                                <Hidden smDown><IconPhone className={classes.icon} /></Hidden> +38 (050) 789 24 98
                            </Typography>
                            <Typography className={classes.contact} variant="subtitle1" gutterBottom component="p">
                                <Hidden smDown><IconCellphone className={classes.icon} /></Hidden> +38 (095) 556 08 45
                            </Typography>
                        </div>
                    </Grid>
                    <Hidden smDown>
                        <Grid item xl={3} md={2} >
                            <Typography align="right" variant="body1" component="p">
                                <Link href="#" className={classes.link} onClick={preventDefault} underline="none">
                                    News
                            </Link>
                            </Typography>
                            <Typography align="right" variant="body1" component="p">
                                <Link href="#" className={classes.link} onClick={preventDefault} underline="none">
                                    Blog
                            </Link>
                            </Typography>
                            <Typography align="right" variant="body1" component="p">
                                <Link href="#" className={classes.link} onClick={preventDefault} underline="none">
                                    Partners
                            </Link>
                            </Typography>
                            <Typography align="right" variant="body1" component="p">
                                <Link href="#" className={classes.link} onClick={preventDefault} underline="none">
                                    Shop
                            </Link>
                            </Typography>
                        </Grid>
                        <Grid item md={2}>
                            <Typography align="right" variant="body1" component="p">
                                <Link href="#" className={classes.link} onClick={preventDefault} underline="none">
                                    Overview
                            </Link>
                            </Typography>
                            <Typography align="right" variant="body1" component="p">
                                <Link href="#" className={classes.link} onClick={preventDefault} underline="none">
                                    Design
                            </Link>
                            </Typography>
                            <Typography align="right" variant="body1" component="p">
                                <Link href="#" className={classes.link} onClick={preventDefault} underline="none">
                                    Code
                            </Link>
                            </Typography>
                            <Typography align="right" variant="body1" component="p">
                                <Link href="#" className={classes.link} onClick={preventDefault} underline="none">
                                    Collaborate
                            </Link>
                            </Typography>
                        </Grid>
                        <Grid item md={2}>
                            <Typography align="right" variant="body1" component="p">
                                <Link href="#" className={classes.link} onClick={preventDefault} underline="none">
                                    Tutorials
                            </Link>
                            </Typography>
                            <Typography align="right" variant="body1" component="p">
                                <Link href="#" className={classes.link} onClick={preventDefault} underline="none">
                                    Recources
                            </Link>
                            </Typography>
                            <Typography align="right" variant="body1" component="p">
                                <Link href="#" className={classes.link} onClick={preventDefault} underline="none">
                                    Guides
                            </Link>
                            </Typography>
                            <Typography align="right" variant="body1" component="p">
                                <Link href="#" className={classes.link} onClick={preventDefault} underline="none">
                                    Examples
                            </Link>
                            </Typography>
                        </Grid>
                        <Grid item md={2}>
                            <Typography align="right" variant="body1" component="p">
                                <Link href="#" className={classes.link} onClick={preventDefault} underline="none">
                                    FAQ
                            </Link>
                            </Typography>
                            <Typography align="right" variant="body1" component="p">
                                <Link href="#" className={classes.link} onClick={preventDefault} underline="none">
                                    Terms
                            </Link>
                            </Typography>
                            <Typography align="right" variant="body1" component="p">
                                <Link href="#" className={classes.link} onClick={preventDefault} underline="none">
                                    Conditions
                            </Link>
                            </Typography>
                            <Typography align="right" variant="body1" component="p">
                                <Link href="#" className={classes.link} onClick={preventDefault} underline="none">
                                    Help
                            </Link>
                            </Typography>
                        </Grid>
                    </Hidden>
                </Grid>

            </div>

            <Copuring />
        </div >
    )
}
