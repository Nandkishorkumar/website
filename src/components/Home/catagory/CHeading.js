import React from 'react';
import styless from './catagory.module.css';
import CatagoryCart from './CatagoryCart';
import styles from './../Touch/touch.module.css'

const CHeading = () => {
  
    return (
        <div className={styles.catagory_main} >
            <div className={styles.main_theading}>
                    <div className={styles.theading}>
                        <p>Browse by Catagory</p>
                    </div>
                    <div className={styless.ptouch}>
                        <p>Shop trending items</p>
                    </div>
                </div>
            <CatagoryCart />
        </div>
    )
}

export default CHeading
