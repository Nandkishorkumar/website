import React from 'react';
import styles from './navigation.module.css';
import Image from "next/image";

const NavigationT = () => {
    return (
        <div className={styles.cancel_order_navigation_main}>
            <div className={styles.cancel_order_navigation_text}>
                <div className={styles.cancel_order_navigation_navbar}>
                <div className={styles.navbar_ul}>
                <ul className={styles.cancel_order_navigation_navbar_ul}>
                    <li className={styles.cancel_order_navigation_navbar_li} >All</li>
                    <li className={styles.cancel_order_navigation_navbar_li}>Completed</li>
                    <li className={styles.cancel_order_navigation_navbar_li}>Unsuccessful</li>
                    <li className={styles.cancel_order_navigation_navbar_li}>Failed</li>
                </ul>
                </div>
                </div>
            </div>
        </div>
    );
}

export default NavigationT;
