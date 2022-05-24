import React from 'react';
import Component from './Component';
import styles from './component.module.css';

const MainComponent = () => {
    return (
        <div className={styles.super}>
            <Component />
            <Component />
            <Component />
            <Component />

        </div>
    )
}

export default MainComponent
