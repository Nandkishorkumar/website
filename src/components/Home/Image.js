import React from 'react';
// import img from './assets/image.svg';
import styles from './header/header.module.css';
import Image from "next/image";
import { height } from '@mui/system';

const Imagehead = () => {
    return (
        <div className={styles.next_img} style={{width:'100%', height:'517px'}}>
           {/* <Image  src="/Home/assets/image.svg" alt="" width={'100%'} height={'517px'}/>  */}
        </div>
    )
}

export default Imagehead
