import React, { useEffect, useState, useContext } from 'react'
import { Grid, Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import { ThemeContext, ThemeScreen } from '../App';
import Spinner from './Spinner';
import UsersItem from './UsersItem';


const useStyles = makeStyles(theme => ({
    h2: {
        paddingBottom: 14
    },
    btn: {
        marginTop: 55
    }
}))


export default function Users() {
    const [users, setUsers] = useState([])
    const [page, setPage] = useState(1)
    const [pages, setPages] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const classes = useStyles();
    const { reset, setReset } = useContext(ThemeContext);
    const screen = useContext(ThemeScreen);

    useEffect(() => {
        if (reset) {
            setPage(1)
            setUsers([])
            setReset(false)
        }
    }, [reset, setReset])

    useEffect(() => {
        let cancel = false
        screen &&
        fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=${screen}`)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                if (data.success) {
                    !cancel && setUsers((users) => [...users, ...data.users])
                    setPages(data.total_pages)
                    setError(false)
                    setLoading(false)
                } else {
                    setLoading(false)
                    setError(true)
                }
            })
            .catch(function (error) {
                setError(true)
                setLoading(false)
            });
        return () => { cancel = true };
    }, [page, screen])

    const hasData = loading && error
    const spinner = loading && <Spinner /> 
    const errorMessage = hasData && <h1>Error users load</h1> 
    const content = !hasData && <UsersItem users={users} /> 

    return (
        <div className="users" id="users">
            <div className="users-title">
                <Grid container justify="center">
                    <Grid lg={6} xs={12} item container justify="center">
                        <Typography className={classes.h2} variant="h2" align="center" component="h2">
                            Our cheerful users
                        </Typography>
                    </Grid>
                    <Grid xs={12} item >
                        <Typography variant="h5" align="center" component="h5" >
                            Attention! Sorting users by registration date
                    </Typography>
                    </Grid>
                </Grid>
            </div>

            <Grid container justify="center">
                {spinner}
                {errorMessage}
                {content}
            </Grid>
            {(page === pages) ? null
                : <Grid container justify="center">
                    <Button
                        className={classes.btn}
                        size="large"
                        variant="outlined"
                        color="primary"
                        onClick={() => setPage(page => page + 1)}
                    >
                        Show more
                    </Button>
                </Grid>
            }
        </div >
    )
}
