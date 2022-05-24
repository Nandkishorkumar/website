import React from 'react';
import styles from './footer.module.css'

const Lowerfooter = () => {
    return (
        <div className={styles.lower_footer}>
            <div className={styles.copyright}>
                <p>Copyright 2021 Kissan</p>
            </div>
            <div className={styles.next}>
                <p>Privacy Notice</p>
                <p>Condition of Use</p>
                <p>Site Map</p>
                <p>Legal</p>
            </div>
        </div>
    )
}

export default Lowerfooter
