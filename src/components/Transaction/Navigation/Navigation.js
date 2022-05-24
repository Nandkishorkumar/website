import React from 'react';
import styles from './navigation.module.css';
import Image from "next/image";

const Navigation = () => {
    return (
        <div className={styles.cancel_order_navigation_main}>
            <div className={styles.cancel_order_navigation_text}>
                <div className={styles.cancel_order_navigation_navbar}>
                <ul className={styles.cancel_order_navigation_navbar_ul}>
                    <li className={styles.cancel_order_navigation_navbar_li} >Wallet</li>
                    <li className={styles.cancel_order_navigation_navbar_li}>Transactions</li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default Navigation
