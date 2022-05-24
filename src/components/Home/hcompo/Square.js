import React from 'react';
import styles from './hcompo.module.css';

const Square = () => {
    return (
        <div className={styles.heading_main}>
            <div className={styles.heading}>
                <p>Welcome To Kissan</p>
            </div>
            <div className={styles.cart_text}>
                <p>Bringing enhanced shopping experince for you</p>
            </div>
        </div>
    )
}

export default Square
