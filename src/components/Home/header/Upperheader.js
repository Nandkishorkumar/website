import React from 'react';
import styles from './header.module.css';

const Upperheader = () => {
    return (
                <div className={styles.header__c}>
                    <div className={styles.header__above}>
                        <p style={{ color: 'whitesmoke' }}>
                            <span style={{ color: '#9ECB10' }}> Call Us Today! 0466 547 226 </span>
                            &nbsp;&nbsp;| &nbsp;&nbsp; info@kissan.com.au &nbsp;&nbsp; | &nbsp;&nbsp; Mon-Sun 10:00am - 07:30pm &nbsp;&nbsp;| &nbsp;&nbsp;
                            <span style={{ color: '#9ECB10' }}> Get free shipping on all order above $30 </span>
                        </p>
                    </div>
                    <div className={styles.header__info}>
                        <p>More Info</p>
                    </div>
                </div>
    )
}

export default Upperheader
