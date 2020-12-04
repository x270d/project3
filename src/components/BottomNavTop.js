import React from 'react'
import { Grid } from '@material-ui/core'
import Nav from './Nav'
import IconHeader from './icon/IconHeader';

export default function BottomNavTop() {
    return (
        <div className="bottom-nav-top">
            <Grid container  >
                <Grid item container xs={12} alignItems="center" justify="space-between">
                    <div className="logo">
                        <IconHeader className="logo-white" />
                    </div>
                    <Nav />
                </Grid>
            </Grid>
        </div>
    )
}
