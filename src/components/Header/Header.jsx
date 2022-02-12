import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <img src="https://e7.pngegg.com/pngimages/539/883/png-clipart-globe-earth-globe-miscellaneous-blue.png" alt="headerimage" />
        </header>
    )
};

export default Header;