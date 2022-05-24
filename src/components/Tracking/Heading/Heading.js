import React from 'react';
import styles from './heading.module.css';
import Image from "next/image";

const Heading = () => {
    return (
        <div className={styles.main}>
           <div className={styles.heading}>Your Order is in Progress</div> 
           <div className={styles.image_text}>
           <div className={styles.image}>
            <Image src="/Tracking/assets/milk.svg" height={'94px'} width={'60px'} alt="img not found"/>
           </div>
           <p className={styles.text}>+2 more</p>
           </div> 
        </div>
    )
}

export default Heading
