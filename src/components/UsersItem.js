import React from 'react'
import { Typography, Avatar, Grid } from '@material-ui/core'
import NumberFormat from 'react-number-format';
import ShowTooltip from './ShowTooltip';

export default function UsersItem({ users }) {
    return (
        <>
            {users.map(user => (

                <Grid item md={4} xs={10} key={user.id}>
                    <div className="users-item">
                        <Avatar
                            className="users-avatar"
                            style={{ width: '70px', height: '70px' }}
                            src={user.photo}
                            alt={user.name}
                            variant="circle"
                        />
                        <div className="users-profile">
                            <ShowTooltip width="200px" wrap="wrap">
                                <Typography variant="h4" component="h4" gutterBottom>
                                    {user.name}
                                </Typography>
                            </ShowTooltip>
                            <Typography variant="body2" component="p">
                                {user.position}
                            </Typography>
                            <ShowTooltip width="200px">
                                <Typography color="inherit" variant="body2" component="p" >
                                    {user.email}
                                </Typography>
                            </ShowTooltip>
                            <Typography variant="body2" component="p" >
                                <NumberFormat
                                    value={user.phone}
                                    displayType={'text'}
                                    format="+## (###) ### ## ##"
                                />
                            </Typography>
                        </div>
                    </div>
                </Grid>

            ))}
        </>
    )
}
