import React from 'react';
import styles from './canclepage.module.css';
import Image from "next/image";

const CanclePage = () => {
    return (
        <div className={styles.main_cancle_page}>
            <div className={styles.cancle_page_heading}>
                <div className={styles.cancle_page_heading_h1}>
                    <div className={styles.cancle_page_heading_h1_text}>
                        <p className={styles.cancle_page_heading_h1_text_p1}>ORDER PLACED</p>
                        <p className={styles.cancle_page_heading_h1_text_p2}>April  27, 2021</p>
                    </div>
                    <div className={styles.cancle_page_heading_h1_text}>
                        <p className={styles.cancle_page_heading_h1_text_p1}>Total</p>
                        <p className={styles.cancle_page_heading_h1_text_p2}>$00.00</p>
                    </div>
                    <div className={styles.cancle_page_heading_h1_text}>
                        <p className={styles.cancle_page_heading_h1_text_p1}>Created Via</p>
                        <p className={styles.cancle_page_heading_h1_text_p2}>Checkout</p>
                    </div>
                </div>
                <div className={styles.cancle_page_heading_h2}>
                    <div className={styles.cancle_page_heading_h2_text}>
                        <p className={styles.cancle_page_heading_h2_text_p1}>ORDER # 111-2484345-2717056</p>
                        <p className={styles.cancle_page_heading_h2_text_p2}>View order details</p>
                    </div>
                </div>
            </div>
            <div className={styles.cancle_page_text}>
                <div className={styles.cancle_page_text_left}>
                    <div className={styles.cancle_page_text_left_heading}>
                        <p className={styles.cancle_page_text_left_heading1}>Cancelled Order</p>
                        <p className={styles.cancle_page_text_left_heading2}>Friday 30 August, 2021</p>
                    </div>
                    <div className={styles.cancle_page_text_left_image_text}>
                        <div className={styles.cancle_page_text_left_image}>
                            <Image src="/Tracking/assets/milk.svg" alt="" height={'131px'} width={'87px'} />
                        </div>
                        <div className={styles.cancle_page_text_left_text}>
                            <p className={styles.cancle_page_text_left_text1}>Pasteurised Unhomogenized Full Cream Milk - 5 Litre (Dairy Product)</p>
                            <p className={styles.cancle_page_text_left_text2}>+ 2 more</p>
                            <button className={styles.cancle_page_text_left_text_button}><p>Buy it Again</p><Image src="/CancelOrder/assets/tryagain.svg" height={'15px'} width={'15px'} /></button>
                        </div>
                    </div>
                </div>
                <div className={styles.cancle_page_text_right}>
                    <button className={styles.cancle_page_text_right_but1}>View Refund / Return Status</button>
                    <button className={styles.cancle_page_text_right_but2}>Archive Order</button>
                </div>

            </div>
        </div>
    );
}

export default CanclePage
