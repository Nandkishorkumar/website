import React from 'react';
import styles from './component.module.css';
import Image from "next/image";

const Component = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.heading}>
                    <p className={styles.headingp}> August 11, 2021</p>
                    </div>
                    <div className={styles.bankinfo}>
                        <div className={styles.infoleft}><Image src="/Transaction/assets/bankinfo.svg" height={'18px'} width={'56px'} /></div>
                        <div className={styles.inforight}>HDFC Bank - Credit Card ending in 7933</div>
                    </div>
                    <div className={styles.orderno}>
                        <p>Order : <span className={styles.orderno_s}>  #2717056-2717056-2717056</span></p>
                    </div>
                    <div className={styles.poweredby}>Kisaan Marketplace order</div>
                </div>

                <div className={styles.right}>
                    <div className={styles.delivery}>
                        <p className={styles.right_head}>Delivery Date</p>
                        <p className={styles.right_text}>April  27, 2021</p>
                    </div>
                    <div className={styles.delivery}>
                        <p className={styles.right_head}>Amount</p>
                        <p className={styles.right_text}>-$500.00</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component
