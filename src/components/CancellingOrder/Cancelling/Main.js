import React from 'react';
import Left from './Left';
import Right from './Right';
import styles from './cancelling.module.css';

const Main = () => {
    return (
        <div className={styles.super_main_class}>
            <Left />
            <Right />
        </div>
    )
}

export default Main
