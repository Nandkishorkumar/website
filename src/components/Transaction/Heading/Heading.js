import React from 'react';
import styles from './heading.module.css';
import NavigationT from './NavigationT';

const Heading = () => {
    return (
        <div  className={styles.main}>
            <div>
                <div className={styles.heading}>
                    Transactions
                </div>
                <div className={styles.text}>
                    To see your all card transactions including refunds
                </div>
            </div>
            <NavigationT />
        </div>
    )
}

export default Heading
