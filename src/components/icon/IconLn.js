import React from "react";
import SvgIcon from '@material-ui/core/SvgIcon';

function IconLn(props) {
    return (
        <SvgIcon
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            {...props}
        >
            <path
                fill="#FFF"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                d="M19.46 0H6.52A6.53 6.53 0 000 6.52v13A6.53 6.53 0 006.52 26h13A6.53 6.53 0 0026 19.46V6.52A6.56 6.56 0 0019.46 0zM8.66 21H5V10.31h3.66V21zM6.78 8.66a1.9 1.9 0 111.9-1.9 1.93 1.93 0 01-1.9 1.9zM21.05 21h-3.11v-5.16c0-1.26-.17-2.87-1.88-2.87s-2 1.36-2 2.78V21h-3.13V10.31h2.88v1.44h.09a3.38 3.38 0 013.15-1.46c3.4 0 4 2 4 4.86V21z"
            ></path>
        </SvgIcon>
    );
}

export default IconLn;