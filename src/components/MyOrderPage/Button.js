import React from 'react'
import styles from './MyOrderPage.module.css';


export default function Button(props) {
    return (
        <button className={styles.similarButton}>
            <p className={styles.buttonText}>{props.ButtonName}</p>
            </button>
    )
}
