import React from 'react';
import Square from './Square';
import  Compo from './Compo'
import styles from './hcompo.module.css'

const MainSquare = () => {
    return (
        <div className={styles.main_square}>
           <Square />
           <Compo />
        </div>
    )
}

export default MainSquare
