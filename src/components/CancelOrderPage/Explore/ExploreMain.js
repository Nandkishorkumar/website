import React from 'react';
import styles from './explore.module.css';
import BrowseProducts from '@components/BrowseCatagory/BrowseHistory/BrowseProducts';

const ExploreMain = () => {
    return (
        <div className={styles.extra_explore}>
<div className={styles.main_explore}>
            <div className={styles.main_explore_heading}>
                <p className={styles.main_explore_heading_text1}>Explore more items</p>
                <p className={styles.main_explore_heading_text2}>page 1 of 2</p>
            </div>
            <BrowseProducts />
        </div>
        </div>
        
    )
}

export default ExploreMain
