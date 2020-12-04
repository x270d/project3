import React, { useState, useEffect, useRef } from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import { makeStyles } from '@material-ui/core/styles'



export default function ShowTooltip(props) {
    const [show, setShow] = useState(false)
    const elWidth = useRef(null)

    useEffect(() => {
        let el = elWidth.current.offsetWidth
        let el1 = elWidth.current.scrollWidth

        if (el < el1) {
            setShow(true)
        }

    }, [])

    const useStyles = makeStyles(theme => ({
        main: {
            whiteSpace: props.wrap || "nowrap",
            maxWidth: props.width || '100%',
            display: 'block',
            width: '100%',
            overflow: "hidden",
            textOverflow: "ellipsis"
        }
    }));

    const classes = useStyles()
    return (
        <Tooltip
            placement="bottom"
            ref={elWidth}
            className={classes.main}
            title={props.children}
            enterTouchDelay={500}
            disableHoverListener={!show}
            disableFocusListener={!show}
            disableTouchListener={!show}
        >
            {props.children}
        </Tooltip>
    )
}
