import React from 'react';
import styles from './recomended.module.css';
import BrowseProducts from '@components/BrowseCatagory/BrowseHistory/BrowseProducts';

const Recomended = () => {
    return (
        <div className={styles.super}>
        <div className={styles.main}>
            <div className={styles.heading}>Recomended Products</div>
            <div className={styles.compo}><BrowseProducts /></div>
            <div className={styles.text}>Show all products</div>
        </div>    
        </div>
    )
}

export default Recomended
