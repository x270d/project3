import React from "react";
import SvgIcon from '@material-ui/core/SvgIcon';

function IconFb(props) {
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
                d="M19.48 0H6.5A6.53 6.53 0 000 6.52v13A6.53 6.53 0 006.5 26h13a6.53 6.53 0 006.5-6.52v-13A6.53 6.53 0 0019.48 0zm-3 13H14v8.05h-3.06V13H9.29V9.7h1.44V8.3a3.2 3.2 0 013.45-3.41h2.53v2.74h-1.79c-.29 0-.68.19-.68.83V9.7h2.54l-.3 3.3z"
            ></path>
        </SvgIcon>
    );
}

export default IconFb;