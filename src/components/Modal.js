import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { ThemeContext } from '../App';

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        height: 179,
        width: 290,
        borderRadius: 3,
        display: 'flex',
        flexDirection: 'column',
        outline: 'none',
        padding: theme.spacing(3, 3, 3),
    },
    btn: {
        textTransform: 'uppercase',
        alignSelf: 'flex-end',
        minWidth: 'auto',
        padding: 0
    }
}));

export default function TransitionsModal({ handleClose, open, errorText }) {
    const { setReset } = useContext(ThemeContext);
    const classes = useStyles();

    const handleClick = () => {
        handleClose()
        setReset(true)
    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>

                {errorText === '' ? <div className={classes.paper}><Typography
                    id="transition-modal-title"
                    variant="h4"
                    component="h4"
                    gutterBottom
                >Congratulations</Typography>
                    <Typography
                        id="transition-modal-description"
                        variant="body1"
                        component="p"
                        style={{ color: "#393939" }}
                        gutterBottom
                    >You have successfully passed <br />the registration
                        </Typography>
                    <Button
                        color="primary"
                        className={classes.btn}
                        disableRipple={true}
                        onClick={handleClick}
                    >ok</Button></div> :

                    <div className={classes.paper}><Typography
                        id="transition-modal-title"
                        variant="h4"
                        component="h4"
                        gutterBottom
                    >Error</Typography>
                        <Typography
                            id="transition-modal-description"
                            variant="body1"
                            component="p"
                            style={{ color: "#393939" }}
                            gutterBottom
                        >{errorText}</Typography>
                        <Button
                            color="primary"
                            className={classes.btn}
                            disableRipple={true}
                            onClick={handleClose}
                        >try again</Button></div>
                }


            </Fade>
        </Modal >
    );
}
