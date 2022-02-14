import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.scss";
import Sidebar from "./Sidebar/Sidebar";

const Nav = (props) => {
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

            <h4 className={styles.title}>Friends</h4>
            <div className={styles.nav__friends}>
                {props.state.friendList.map(friend => <Sidebar name={friend.name} avatar={friend.avatarSrc} />)}
            </div>
        </nav>
    )
};

export default Nav;