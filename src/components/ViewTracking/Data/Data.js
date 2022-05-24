import React from 'react';
import styles from './data.module.css';

const Data = () => {
    return (
        <div style={{height:'259px', borderBottom:'1px solid #E0E0E0'}}>
       
        <div className={styles.main}>
            <div className={styles.order}>
                <p className={styles.heading}>Order Placed</p>
                <p className={styles.text}>August 20th, 2021</p>
            </div>
            <div className={styles.name}>
                <p className={styles.heading}>Shipped to</p>
                <p className={styles.text}>Gurpreet Singh</p>
                <p className={styles.address}>1507 W............    Arlington Heights.</p>
            </div>
            <div className={styles.orderid}>
                <div>
                    <p className={styles.heading}>Order ID #2717056</p>
                    <p className={styles.data}>View Order Detail &nbsp; &nbsp; <span style={{ color: '#EED1AF' }}>|</span>  &nbsp; &nbsp; View invoice</p>
                </div>
                <button className={styles.button}>Continue Shopping</button>
            </div>
        </div>
        </div>
    )
}

export default Data
