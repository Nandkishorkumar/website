import React from 'react';
import styles from './mainmenu.module.css';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';

const MainMenu = () => {
    return (
        <div className={styles.menumainclass}>
            <LeftMenu />
            <RightMenu />
        </div>
    )
}

export default MainMenu
