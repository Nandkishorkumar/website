import React from 'react';
import styles from './dropdown.module.css';
import Menu from './Menu'


const DropMenu = () => {
    return (
        <div className={styles.dropdown_browse_main}>
            <div className={styles.main_dropdown}>
                <p className={styles.dropdown_heading}>Fresh</p>
                <Menu />
            </div>

        </div>
    );
}

export default DropMenu
