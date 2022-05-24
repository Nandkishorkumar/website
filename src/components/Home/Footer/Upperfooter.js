import React from 'react';
import styles from  './footer.module.css';
import Lowerfooter from './Lowerfooter';
import Image from "next/image";


const Upperfooter = () => {
    return (
        <div className={styles.main_footer}>
            <div className={styles.upper_footer}>
                <button className={styles.footer_button}><Image src="/Home/assets/upkey.svg" alt="" layout="fill"/></button>
                <div className={styles.left_footer}>
                    <div className={styles.div1}>
                        <div className={styles.divh}>
                            <p>Shoping</p>
                        </div>
                        <div className={styles.divt}>
                            <p>Browse Products Delivery Recipes</p>
                        </div>
                        <div className={styles.nexth}>
                            <p>Follow Us on :</p>
                        </div>
                        <div className={styles.icon}>
                            <Image width={'25.06px'} height={'25.21px'} src="/Home/assets/facebook.svg" alt="not found" />
                            <Image width={'25.06px'} height={'25.21px'} src="/Home/assets/twitter.svg" alt="not found" />
                            <Image width={'25.06px'} height={'25.21px'} src="/Home/assets/instagram.svg" alt="not found" />
                        </div>
                    </div>
                    <div className={styles.div1}>
                        <div className={styles.div2h}>
                            <p>Mision in Action</p>
                        </div>
                        <div className={styles.div2t}>
                            <p>Responsible Sourcing Quality Standards Environmental Stewardship</p>
                        </div>
                        <div className={styles.next2h}>
                            <p>Customer Care</p>
                        </div>
                        <div className={styles.icon2}>
                            <span><Image src="/Home/assets/callicon.svg" alt="" width={'12px'} height={'12px'}/>&nbsp;&nbsp; 0466 547 226</span>
                            <span><Image src="/Home/assets/message.svg" alt="" width={'12px'} height={'12px'}/>&nbsp;&nbsp;&nbsp;info@kisaan.com.au</span>
                        </div>
                    </div>
                    <div className={styles.div1}>
                        <div className={styles.divh}>
                            <p>About</p>
                        </div>
                        <div className={styles.divt}>
                            <p>About Kisaan Our Values Departments</p>
                        </div>
                        <div className={styles.next3h}>
                            <p>Download App</p>
                        </div>
                        <div className={styles.icon3}>
                            <Image width='30px' height='30px' src="/Home/assets/Android.svg" alt="" />
                            <Image width='30px' height='30px' src="/Home/assets/Apple.svg" alt="" />
                        </div>
                    </div>
                </div>
                <div className={styles.right_footer}>
                    <p className={styles.right_h}>Subscribe to Our Newsletter</p>
                    <p className={styles.right_t}>Receive  email updates on product announcements, gift ideas, recipes, special promotions, sales, and more.</p>
                    <div className={styles.footermessinput}>
                    <Image src="/Home/assets/message.svg" alt=""width={'25px'} height={"18.67px"}/>
                    <input className={styles.right_input} type="text" placeholder="Enter your Email" />
                    </div>
                    <br />
                    <button className={styles.right_button}>Subscribe</button>
                    <p className={styles.powerd}>Powerd by&nbsp;&nbsp;:&nbsp;&nbsp;Tech Infinitos</p>
                </div>
            </div>
            <Lowerfooter />
        </div>
    )
}

export default Upperfooter
