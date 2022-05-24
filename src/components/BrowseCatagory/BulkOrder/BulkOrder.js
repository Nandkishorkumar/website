import React from 'react';
import styles from './bulkorder.module.css'
import Image from "next/image";

const BulkOrder = () => {
    return (
        <div className={styles.main_bulk}>
            <div className={styles.bulkorder}>
                <div className={styles.bulkheading}>
                    <p className={styles.bulkp}>Bulk Ordering (Something like below)</p>
                </div>
                <div className={styles.bulk_image_text}>
                        <div className={styles.bulkimage}>
                            <Image src="/BrowseCatagory/assets/bulkorder.svg" alt="" width={'337px'} height ={'306px'} />
                        </div>
                        <div className={styles.bulktext}>
                            <p className={styles.bheading}>Catering & Everyday Entertaining</p>      
                            <p className={styles.pheading}>Order meals, enterees and party must-haves online, and then pick them up at the store.</p>    
                            <button className={styles.bbutton}>Shop Category</button>  
                        </div>
                </div>
            </div>
        </div>
    )
}

export default BulkOrder
