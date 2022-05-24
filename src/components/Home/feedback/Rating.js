import React from 'react';
import styles from './feedback.module.css';
import array from './array';
import Image from "next/image";

const Rating = () => {
    return (
        <div className={styles.super_container}>
             {
            array.map((val, ind) =>
            <>
           <div className={styles.container}>
                <Image className={styles.qutoes} src={val.rimg} alt="img not found" width={'33px'} height={'24px'}/>
                <p className={styles.text}>{val.rtitle}
                </p>
                <Image className={styles.avatar} src={val.rpic} alt="img not found" width={'90px'} height={'90px'}/>
                <p className={styles.avatar-name}>{val.rname}</p>
                <Image className={styles.rating} src={val.rrating} alt="img not found" width={'130px'} height={'25.28px'}/>
            </div>
            </>
            )
        }
        </div>
    )
}

export default Rating
