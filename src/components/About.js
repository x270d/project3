import React, { Suspense, lazy } from 'react'
import { Grid, Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { Link } from "react-scroll"
import Spinner from './Spinner'

const ManMobile = lazy(() => import('./icon/ManMobile'))

export default function About() {
    return (

        <div className="about" id="about">
            <Grid container justify="center">
                <Typography variant="h2" component="h2" gutterBottom>
                    Let's get ac quainted
                </Typography>
            </Grid>
            <Grid container justify="center">
                <Grid item md={4} xs={10} justify="center" alignItems="center" container>
                    <Suspense fallback={<Spinner />}>
                        <ManMobile className="img" />
                    </Suspense>
                </Grid>
                <Grid item md={8} xs={12} >
                    <Typography variant="h3" component="h3" className="about-h3" >
                        I am cool frontend developer
                    </Typography>
                    <Typography variant="body1" component="p">
                        When real users have a slow experience on mobile, they're much less likely
                        to find what they are looking for or purchase from you in the future.
                        For many sites this equates to a huge missed opportunity, especially
                        when more than half of visits are abandoned if a mobile page takes over 3 seconds to load.
                    </Typography>
                    <br />
                    <Typography variant="body1" component="p">
                        Last week, Google Search and Ads teams announced two new speed
                        initiatives to help improve user-experience on the web.
                    </Typography>
                    <Button
                        component={Link}
                        to="sign-up"
                        disableRipple={true}
                        color="primary"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        aria-label="Sign Up"
                    >
                        Sign Up</Button>
                </Grid>
            </Grid>
        </div>

    )
}
