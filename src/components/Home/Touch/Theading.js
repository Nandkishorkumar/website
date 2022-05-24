import React from 'react';
import styles from './touch.module.css';
import Contact from './Contact';

const Theading = () => {
    return (
        <div className={styles.main_contact}>
            <div className={styles.main_theading}>
                <div className={styles.theading}>
                    <p>Get In Touch</p>
                </div>
                <div className={styles.ttouch}>
                    <p>Call,email or chat with us, we are always here to help</p>
                </div>
            </div>
            <div className={styles.full_contact}>
            <Contact />
            </div>
        </div>
    )
}

export default Theading
