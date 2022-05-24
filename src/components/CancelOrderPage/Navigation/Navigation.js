import React from 'react';
import styles from './navigation.module.css';
import Image from "next/image";

const Navigation = () => {
    return (
        <div className={styles.cancel_order_navigation_main}>
            <div className={styles.cancel_order_navigation_heading}>
                <p>Your Orders</p>
            </div>
            <div className={styles.cancel_order_navigation_text}>
                <div className={styles.cancel_order_navigation_navbar}>
                <ul className={styles.cancel_order_navigation_navbar_ul}>
                    <li className={styles.cancel_order_navigation_navbar_li} >Orders</li>
                    <li className={styles.cancel_order_navigation_navbar_li}>Buy Again</li>
                    <li className={styles.cancel_order_navigation_navbar_li}>Cancelled Orders</li>
                </ul>
                </div>
                <div className={styles.cancel_order_navigation_search}>
                    <input type="text" placeholder="Search all order" className={styles.Navigation_serach} />
                    <button className={styles.navigation_searchicon_button}><Image src="/CancelOrder/assets/cancelnavsearch.svg" alt="not found" className={styles.navigation_searchicon} width={'22.21px'} height={'21.83px'}/></button>
                </div>
            </div>
        </div>
    )
}

export default Navigation
