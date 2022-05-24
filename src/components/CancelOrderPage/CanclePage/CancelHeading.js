import React from 'react';
import styles from './canclepage.module.css';
import CanclePage from './CanclePage';

const CancelHeading = () => {
    return (
        <div className={styles.super_main_cancle_page_heading}>
            <p className={styles.main_cancle_page_heading}> <span className={styles.main_cancle_page_heading_span}> 1 Cancel order</span> placed in the last 6 month</p>
            <CanclePage />
        </div>
    )
}

export default CancelHeading;
