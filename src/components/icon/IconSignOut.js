import React from "react";
import SvgIcon from '@material-ui/core/SvgIcon';

function IconSignOut(props) {
    return (
        <SvgIcon
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="20"
            viewBox="0 0 24 20"
            {...props}
        >
            <g fillRule="nonzero" stroke="none" strokeWidth="1">
                <path
                    d="M10.8 18.12a.31.31 0 010-.2c0-.06 0-.11-.11-.14-.11-.03-.12-.07-.12-.09 0-.02-.06 0-.18 0H5.41a2.35 2.35 0 01-1.73-.72A2.35 2.35 0 013 15.18V4.41a2.35 2.35 0 01.72-1.73A2.35 2.35 0 015.41 2h4.9a.45.45 0 00.31-.1.48.48 0 00.15-.3 2.58 2.58 0 00.05-.36v-.4-.31a.45.45 0 00-.17-.38.46.46 0 00-.34-.15h-4.9a4.27 4.27 0 00-3.12 1.29A4.27 4.27 0 001 4.41v10.77a4.25 4.25 0 001.29 3.12 4.27 4.27 0 003.12 1.29h4.9a.45.45 0 00.31-.1.43.43 0 00.15-.3 2.58 2.58 0 00.05-.36v-.4c0-.16-.02-.27-.02-.31z"
                    transform="translate(-1)"
                ></path>
                <path
                    d="M24.71 9.11L16.38.78a1 1 0 00-1.38 0 .92.92 0 00-.3.69v4.41H7.86a1 1 0 00-1 1v5.87a1 1 0 001 1h6.85v4.41a.92.92 0 00.3.69 1 1 0 001.37 0l8.33-8.33a1 1 0 000-1.37v-.04z"
                    transform="translate(-1)"
                ></path>
            </g>
        </SvgIcon>
    );
}

export default IconSignOut;