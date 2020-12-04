import React from 'react'
import { Avatar, Typography } from '@material-ui/core'
import ShowTooltip from './ShowTooltip'


export default function User({ user }) {


    return (
        <>
            {user ?
                <div className="user">
                    < div className="user-info" >
                        <ShowTooltip width="150px" >
                            <p className="user-name">{user.name}</p>
                        </ShowTooltip>
                        <ShowTooltip width="170px" >
                            <Typography component="p"
                                variant="caption"
                                className="user-email"
                                color="inherit"
                            >{user.email}
                            </Typography>
                        </ShowTooltip>
                    </div >
                    <Avatar alt={user.name} src={user.photo} variant="circle" className="user-avatar" />
                </div >
                :
                null
            }
        </>

    )
}
