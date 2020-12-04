import React from 'react'
import IconFb from './icon/IconFb'
import IconTw from './icon/IconTw'
import IconIn from './icon/IconIn'
import IconPn from './icon/IconPn'
import IconLn from './icon/IconLn'
import { Grid, Typography, IconButton } from '@material-ui/core'

export default function Copuring() {
    return (
        <div className="copyring">
            <Grid container >
                <Grid item container justify="space-between" alignItems="center">
                    <div className="copyring-text">
                        <Typography gutterBottom variant="body2" style={{ fontSize: 12, color: "#fff" }} component="p">
                            &copy; abz.agency specially for the test task
                        </Typography>

                    </div>
                    <div className="social">
                        <IconButton
                            disableFocusRipple
                            color="secondary"
                            aria-label="social"
                        >
                            <IconFb className="social-item" />
                        </IconButton>
                        <IconButton
                            disableFocusRipple
                            color="secondary"
                            aria-label="social"
                        >
                            <IconLn className="social-item" />
                        </IconButton>
                        <IconButton
                            disableFocusRipple
                            color="secondary"
                            aria-label="social"
                        >
                            <IconIn className="social-item" />
                        </IconButton>
                        <IconButton
                            disableFocusRipple
                            color="secondary"
                            aria-label="social"
                        >
                            <IconTw className="social-item" />
                        </IconButton>
                        <IconButton
                            disableFocusRipple
                            color="secondary"
                            aria-label="social"
                        >
                            <IconPn className="social-item" />
                        </IconButton>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
