import React, { Suspense, lazy } from 'react'
import { Grid, Typography, Hidden } from '@material-ui/core'
import Spinner from './Spinner'

const IconMan = lazy(() => import('./icon/IconMan'))
const IconMan2 = lazy(() => import('./icon/IconMan2'))

export default function Requirements() {
    return (
        <div className="requirements" id="requirements">
            <Grid container justify="center">
                <Grid item lg={10} md={7} xs={12}>
                    <Typography variant="h2" style={{ color: '#fff' }} align="center" component="h2" gutterBottom>
                        General requirements for the test task
                    </Typography>
                </Grid>
            </Grid>
            <Grid container justify="center">
                <Grid item md={6} xs={12}>
                    <Typography variant="body1" component="p" style={{ color: '#fff', marginTop: -5 }} >
                        Users want to find answers to their questions quickly and data
                        shows that people really care about how quickly their pages load.
                        The Search team announced speed would be a ranking signal for desktop
                        searches in 2010 and as of this month (July 2018), page speed will be a
                        ranking factor for mobile searches too.
                    </Typography>
                    <br />
                    <Typography variant="body1" component="p" style={{ color: '#fff' }}>
                        If you're a developer working on a site, now is a good time
                        to evaluate your performance using our speed tools. Think
                        about how performance affects the user experience of your pages
                        and consider measuring a variety of real-world user-centric performance metrics.
                    </Typography>
                    <br />
                    <Typography variant="body1" component="p" style={{ color: '#fff' }}>
                        Are you shipping too much JavaScript? Too many images? Images
                        and JavaScript are the most significant contributors to the page
                        weight that affect page load time based on data from HTTP Archive
                        and the Chrome User Experience Report - our public dataset for key
                        UX metrics as experienced by Chrome users under real-world conditions.
                    </Typography>
                </Grid >
                <Grid item md={6}
                    xs={12} justify="center"
                    alignItems="center"
                    container
                    className="requirements-reverse">
                    <Hidden only="md">
                        <Suspense fallback={<Spinner />}>
                            <IconMan className="man" />
                        </Suspense>
                    </Hidden>
                    <Hidden only={['lg', 'xl', 'sm', 'xs']}>
                        <Suspense fallback={<Spinner />}>
                            <IconMan2 className="man" />
                        </Suspense>
                    </Hidden>
                </Grid>
            </Grid >
        </div >
    )
}
