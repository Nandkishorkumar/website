import React from 'react';
import styles from './cancellingpage.module.css';
import Image from "next/image";
import styless from './../../CancelOrderPage/CanclePage/canclepage.module.css';
const CancellingPage = () => {
    return (
        <div className={styles.main_cancellingpage}>
            <div className={styles.cancellingpage}>
                <p className={styles.cancellingpage_heading}>Are you sure you want to cancel this order?</p>
                <div className={styles.cancellingpage_table}>
                    <div className={styles.cancellingpage_table_heading}>
                        <p className={styles.cancellingpage_table_heading_text}>Items Ordered</p>
                        <p className={styles.cancellingpage_table_heading_text2}>Price</p>
                    </div>
                    <div className={styles.cancellingpage_table_text}>
                   <div className={styles.cancellingpage_table_text_left}>
                       <Image src="/CancellingPage/assets/milk.svg" alt="" height={'85px'} width={'54px'} />
                       <div className={styles.cancellingpage_table_text_left_text}>
                       <p className={styless.cancle_page_text_left_text1}>Pasteurised Unhomogenized Full Cream Milk - 5 Litre (Dairy Product)</p>
                            <p className={styless.cancle_page_text_left_text2}>+ 2 more</p>
                       </div>
                   </div> 
                   <div className={styles.cancellingpage_table_right}>
                       <p className={styles.cancellingpage_table_right_text}>$150</p>
                   </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CancellingPage;
