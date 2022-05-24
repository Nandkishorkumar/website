import React from 'react';
import styles from './touch.module.css';
import Image from "next/image";

const Contact = () => {
    return (
        <div className={styles.contact_main}> 
            <div className={styles.girl}>

                <Image src="/Home/assets/girl.svg" alt="not found" width={'98px'} height={'122px'} />
                <p className={styles.girlh}>Call us</p>
                <p className={styles.girlt}>0466 KISAAN 0466 547226 <span style={{fontSize:'12px',width:'131px',marginTop:'10px'}}> Mon - Sun 10:00am - 07:30pm</span></p>
            </div>
            <div className={styles.bar}>
                <Image src="/Home/assets/bar.svg" alt="not found" width={'2px'} height={"181px"}/>
            </div>
            <div className={styles.mail}>
                <Image src="/Home/assets/mess.svg" alt="not found" width={'101px'} height={'115px'} />
                <p className={styles.mailh}>Write us</p>
                <p className={styles.mailt}>info@kisaan.com.au <br /> <span style={{fontSize:'12px',width:'131px',marginTop:'10px'}} > Get response within 24 hours</span></p>
            </div>
            <div className={styles.bar}>
                <Image src="/Home/assets/bar.svg" alt="not found" width={'2pxpx'} height={"181px"}/>
            </div>
            <div className={styles.chat}>
                <Image src="/Home/assets/chat.svg" alt="not found" width={'123px'} height={'123px'} />
                <p className={styles.chath}>Chat with us</p>
                <button className={styles.chatb}>Start Chat</button>
            </div>
        </div>
    )
}

export default Contact
