import React from "react";
import SvgIcon from '@material-ui/core/SvgIcon';

function IconIn(props) {
    return (
        <SvgIcon
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            {...props}
        >

            <g fill="#FFF" fillRule="nonzero" stroke="none" strokeWidth="1">
                <path d="M15.3 11.32a2.82 2.82 0 00-4.62 0 2.92 2.92 0 00-.54 1.68 2.85 2.85 0 005.7 0 2.92 2.92 0 00-.54-1.68z"></path>
                <path d="M17.09 11.34a4 4 0 01.33 1.66 4.43 4.43 0 01-8.86 0 3.91 3.91 0 01.33-1.65h-2.5V18A1.68 1.68 0 008 19.59h10A1.68 1.68 0 0019.59 18v-6.66h-2.5z"></path>
                <path d="M18.84 6.76L16.45 6.76 16.45 9.51 19.18 9.51 19.18 7.11 19.18 6.74z"></path>
                <path d="M19.46 0H6.52A6.53 6.53 0 000 6.52v13A6.53 6.53 0 006.52 26h13A6.53 6.53 0 0026 19.46V6.52A6.56 6.56 0 0019.46 0zM21 11.32V18a3 3 0 01-3 3H8a3 3 0 01-3-3V8a3 3 0 013-3h10a3 3 0 013 3v3.32z"></path>
            </g>
        </SvgIcon>
    );
}

export default IconIn;