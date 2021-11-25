import React from "react";
import './header.css'
import {elastic as Menu} from "react-burger-menu";
import {Link, NavLink} from "react-router-dom";
// import Logo from "../../../assets/img/Union.svg";

const MenuBurger = () => {
    return (
        // Pass on our props
        <Menu right >
            <div className="bm-item">
                <Link className="d-block" href="/">home</Link>
                <Link className="d-block" to="/">about</Link>
                <Link className="d-block" to="/"> how it works?</Link>
                <NavLink className="d-block" to="/login">login</NavLink>
            </div>
        </Menu>
    );
};
export default MenuBurger