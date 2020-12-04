import React, { Suspense, lazy } from 'react'
import { Grid, Typography } from '@material-ui/core'

import Spinner from './Spinner'
const IconHtml = lazy(() => import('./icon/IconHtml'))
const IconCss = lazy(() => import('./icon/IconCss'))
const IconJs = lazy(() => import('./icon/IconJs'))

export default function Relationships() {
    return (
        <div className="relationships" id="relationships">
            <Grid container justify="center">
                <Grid item xl={6} lg={8} xs={12}>
                    <Typography variant="h2" align="center" component="h2" gutterBottom>
                        About my relationships with
                            web-development
                    </Typography>
                </Grid>
            </Grid>
            <Grid container justify="center">
                <Grid item lg={4} xs={10}>
                    <div className="relation">
                        <div className="relation-item">
                            <Suspense fallback={<Spinner />}>
                                <IconHtml className="relation-img" />
                            </Suspense>
                            <div className="relation-text">
                                <Typography variant="h3" component="h3">
                                    I'm in love with HTML
                                </Typography>
                                <Typography variant="body1" component="p">
                                    Hypertext Markup Language (HTML) is the standard markup
                                    language for creating web pages and web applications.
                                </Typography>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={4} xs={10}>
                    <div className="relation">
                        <div className="relation-item">
                            <Suspense fallback={<Spinner />}>
                                <IconCss className="relation-img" />
                            </Suspense>
                            <div className="relation-text">
                                <Typography variant="h3" component="h3">
                                    CSS is my best friend
                                </Typography>
                                <Typography variant="body1" component="p">
                                    Cascading Style Sheets (CSS) is a  style sheet language used for
                                    describing the presentation of a document written in a markup
                                    language like HTML.
                                </Typography>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={4} xs={10} >
                    <div className="relation">
                        <div className="relation-item">
                            <Suspense fallback={<Spinner />}>
                                <IconJs className="relation-img" />
                            </Suspense>
                            <div className="relation-text">
                                <Typography variant="h3" component="h3">
                                    JavaScript is my passion
                                </Typography>
                                <Typography variant="body1" component="p">
                                    JavaScript is a high-level, interpreted programming language.
                                    It is a language which is also characterized as dynamic, weakly typed,
                                    prototype-based and multi-paradigm.
                                </Typography>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>

        </div>
    )
}
