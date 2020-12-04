import React from 'react'
import { Link } from "react-scroll";

export default function Nav({ onClose }) {
    return (
        <ul className="nav">

            <li className="nav-item">
                <Link
                    activeClass="active"
                    className="nav-link"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    onClick={onClose}
                >
                    About me
            </Link>
            </li>
            <li className="nav-item">
                <Link
                    activeClass="active"
                    className="nav-link"
                    to="relationships"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    onClick={onClose}
                >
                    Relationships
            </Link>
            </li>
            <li className="nav-item">
                <Link
                    activeClass="active"
                    className="nav-link"
                    to="requirements"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    onClick={onClose}
                >
                    Requirements
            </Link>
            </li>
            <li className="nav-item">
                <Link
                    activeClass="active"
                    className="nav-link"
                    to="users"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    onClick={onClose}
                >
                    Users
            </Link>
            </li>
            <li className="nav-item">
                <Link
                    activeClass="active"
                    className="nav-link"
                    to="sign-up"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    onClick={onClose}
                >
                    Sign Up
            </Link>
            </li>

            <li className="nav-item">
                <Link
                    to="#"
                    onClick={onClose}
                >
                    Sign Out
            </Link>
            </li>
        </ul>
    )
}
