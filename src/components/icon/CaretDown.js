import React from "react";

function CaretDown({ className }) {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="9"
            viewBox="0 0 16 9"
        >
            <path
                fill="#000"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                d="M15.7.3A.94.94 0 0015 0H1a.94.94 0 00-.7.3A1 1 0 000 1a.94.94 0 00.3.7l7 7a1 1 0 001.4 0l7-7A.94.94 0 0016 1a1 1 0 00-.3-.7z"
            ></path>
        </svg>
    );
}

export default CaretDown;
