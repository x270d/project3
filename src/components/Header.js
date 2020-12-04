import React, { useState, useEffect, Suspense, lazy } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Hidden from '@material-ui/core/Hidden'
import Nav from './Nav'
import { makeStyles } from '@material-ui/core/styles'
import SideDraver from './SideDraver'
import IconSignOut from './icon/IconSignOut'
import IconHeader from './icon/IconHeader'
import IconLineMenu from './icon/IconLineMenu'
import Spinner from './Spinner'
import superstar from '../resources/img/user-superstar-2x.jpg'

const User = lazy(() => import('./User'))

const useStyles = makeStyles(theme => ({
    icon: {
        marginLeft: 16,
        cursor: 'pointer',
        padding: 0
    }
}))

export default function Header(props) {

    const [header, setHeader] = useState(false);
    const [draverOpen, setDraverOpen] = useState(false)
    const [user, setUser] = useState(null)

    useEffect(() => {
        fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users/1`)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                if (data.success) {
                    setUser(data.user)
                } else {
                    // 
                    setUser([
                        { "name": "Superstar" },
                        { "email": "Superstar@gmail.com" },
                        { "photo": superstar }
                    ])
                }
            })
            .catch((error) => {
                console.log(error)
                setUser([
                    { "name": "Superstar" },
                    { "email": "Superstar@gmail.com" },
                    { "photo": superstar }
                ])
            })
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setHeader(true)
            } else {
                setHeader(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

    const toggleDrawer = (value) => {
        setDraverOpen(value)
    }

    const classes = useStyles()

    return (
        <AppBar
            position="fixed"
            style={{
                background: header ? '#fbfafa' : '#fff'
            }}
        >
            <Toolbar>
                <div className="logo">
                    <IconHeader />
                </div>
                <Hidden mdDown>
                    <Nav />
                    <div className="right-block">
                        <Suspense fallback={<Spinner />}>
                            <User user={user} />
                        </Suspense>
                        <IconButton
                            className={classes.icon}
                            color="secondary"
                            disableFocusRipple
                            aria-label="sign out"
                        >
                            <IconSignOut />
                        </IconButton>
                    </div>
                </Hidden>
                <Hidden lgUp>
                    <IconButton
                        color="inherit"
                        aria-label="menu"
                        onClick={() => toggleDrawer(true)}
                        disableRipple
                    >
                        <IconLineMenu />
                    </IconButton>
                </Hidden>
                <SideDraver
                    user={user}
                    open={draverOpen}
                    onClose={toggleDrawer}
                />
            </Toolbar>
        </AppBar>
    )
}
