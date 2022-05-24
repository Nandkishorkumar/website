import React from 'react';
import styles from './feedback.module.css';
import Rating from './Rating';
import Image from "next/image";

const Heading = () => {
    return (
        <div className={styles.main_feedback}>
        <div className={styles.main_heading}>
        <div className={styles.hfeedback}>
            <p>What Our Customer Say</p>
        </div>
        <div className={styles.tfeedback}>
            <p>This is how it works</p>
        </div>
    </div>
    <Rating />
    <div className={styles.dot}>
        <Image src="/Home/assets/dots.svg" alt="" width={'105px'} height={'15px'}/>
    </div>
    </div>
    )
}

export default Heading
