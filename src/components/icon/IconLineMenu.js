import React from "react";
import SvgIcon from '@material-ui/core/SvgIcon';

function IconLineMenu(props) {
    return (
        <SvgIcon
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="22"
            viewBox="0 0 23 22"
            {...props}
        >
            <g {...props} fill="#283593" fillRule="nonzero" stroke="none" strokeWidth="1">
                <path
                    d="M2.9 3.85A1.85 1.85 0 011 2a1.9 1.9 0 011.9-2h19.15A2 2 0 0124 2a1.9 1.9 0 01-1.95 1.9L2.9 3.85zM22.05 8.57A2 2 0 0124 10.52a1.9 1.9 0 01-1.95 1.9H2.9a1.85 1.85 0 01-1.9-1.9 1.9 1.9 0 011.9-1.95h19.15zM22.05 17.2A1.9 1.9 0 0124 19.09a2 2 0 01-1.95 2H2.9a1.9 1.9 0 01-1.9-2 1.85 1.85 0 011.9-1.89h19.15z"
                    transform="translate(-1)"
                ></path>
            </g>
        </SvgIcon>
    );
}

export default IconLineMenu;