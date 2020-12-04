import React, { Suspense, lazy } from 'react'
import Drawer from '@material-ui/core/Drawer'
import Nav from './Nav'
import Spinner from './Spinner'
const User = lazy(() => import('./User'))

export default function SideDraver({ open, onClose, user }) {
    return (
        <Drawer
            anchor="left"
            open={open}
            onClose={() => onClose(false)}
        >
            <div className="sideMenu">
                <Suspense fallback={<Spinner />}>
                    <User user={user} />
                </Suspense>
                <hr />
                <Nav onClose={() => onClose(false)} />
            </div>

        </Drawer>
    )
}
