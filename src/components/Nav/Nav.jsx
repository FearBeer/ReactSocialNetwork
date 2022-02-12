import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";

const Nav = () => {
    const activeLink = () => {
        return nav => nav.isActive ? `${styles.nav__link} ${styles.active}` : styles.nav__link
    };

    return (
        <nav className={styles.nav}>
            <div>
                <NavLink to="/profile" className={activeLink()}>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/dialogs" className={activeLink()}>Messages</NavLink>
            </div>
            <div>
                <NavLink to="/news" className={activeLink()}>News</NavLink>
            </div>
            <div>
                <NavLink to="/music" className={activeLink()}>Music</NavLink>
            </div>
            <div>
                <NavLink to="/settings" className={activeLink()}>Settings</NavLink>
            </div>            
        </nav>
    )
};

export default Nav;