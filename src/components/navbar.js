import React from 'react';
import {NavLink} from "react-router-dom";
import {IoMdSettings} from "react-icons/io";
import {IoHomeSharp} from "react-icons/io5";
import Styles from "../style.css";

const Navbar = () => {
    return (
        <>
            <nav>
                <ul className="hero">
                    <li className="linkNav">
                        <NavLink to="/" className="linkNavLink">
                            <div className="li">
                                <IoHomeSharp size={35} cursor={"pointer"}/>
                                <p>HOME</p>
                            </div>
                        </NavLink>
                    </li>
                    <li className="linkNav">
                        <NavLink to="/impostazioni" className="linkNavLink">
                            <div className="li">
                                <IoMdSettings size={40} cursor={"pointer"}/>
                                <p>Impostazioni</p>
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
