import React from 'react'
import styles from './account.module.css';
import Image from "next/image"



function Youraccount() {
    return (
        <>
            <p className={styles.heading}>Your Account</p>
            <div className={styles.aline}>
                <div className={styles.compo1}>
                    <div className={styles.imgDiv}>
                        {/* <div className={styles.img1}>
                            <Image className={styles.overlapimg} src="/your_account/Ellipse 85.svg" width={"58px"} height={"58px"} />
                        <div className={styles.img2}>
                        </div>
                    </div>                         */}
                    <div className={styles.img1}>
                    <Image className={styles.overlapimg2} src="/your_account/image 57.svg"  width={"34px"} height={"34 px"}/>
                    </div>

                            
                    </div>
                    <div className={styles.compotext}>
                        <text className={styles.text1}>Your Orders</text>
                        <text className={styles.text2}>Track, return or buy things again</text>
                    </div>

                </div>
                <div className={styles.compo1}>
                    <div className={styles.imgDiv}>
                        <Image className={styles.overlapimg} src="/your_account/image 58.svg" width={"34px"} height={"34px"} />
                        {/* <Image className={styles.overlapimg} src="/your_account/image 57.svg"  width={"34px"} height={"34 px"}/> */}

                    </div>
                    <div className={styles.compotext}>
                        <p className={styles.text1}>Login & security</p>
                        <text className={styles.text2}>
                            Edit login, name and mobile number</text>
                    </div>

                </div>
                <div className={styles.compo1}>
                    <div className={styles.imgDiv}>
                        <Image className={styles.overlapimg} src="/your_account/image 59.svg" width={"34px"} height={"34px"} />
                        {/* <Image className={styles.overlapimg} src="/your_account/image 57.svg"  width={"34px"} height={"34 px"}/> */}

                    </div>
                    <div className={styles.compotext}>
                        <text className={styles.text1}>Gift card</text>
                        <text className={styles.text2}>View balance, redeem or reload cards</text>
                    </div>

                </div>
            </div>
            <div className={styles.aline}>
                <div className={styles.compo1}>
                    <div className={styles.imgDiv}>
                        <Image className={styles.overlapimg} src="/your_account/image 60.svg" width={"34px"} height={"34px"} />
                        {/* <Image className={styles.overlapimg} src="/your_account/image 57.svg"  width={"34px"} height={"34 px"}/> */}

                    </div>
                    <div className={styles.compotext}>
                        <text className={styles.text1}>Your Payments</text>
                        <text className={styles.text2}>Manage payment methods and settings, view all transactions</text>
                    </div>

                </div>
                <div className={styles.compo1}>
                    <div className={styles.imgDiv}>
                        <Image className={styles.overlapimg} src="/your_account/image 61.svg" width={"34px"} height={"34px"} />
                        {/* <Image className={styles.overlapimg} src="/your_account/image 57.svg"  width={"34px"} height={"34 px"}/> */}

                    </div>
                    <div className={styles.compotext}>
                        <text className={styles.text1}>Your Profile</text>
                        <text className={styles.text2}>Manage, add or remove user profile for personalized experiences</text>
                    </div>

                </div>
                <div className={styles.compo1}>
                    <div className={styles.imgDiv}>
                        <Image className={styles.overlapimg} src="/your_account/image 62.svg" width={"34px"} height={"34px"} />
                        {/* <Image className={styles.overlapimg} src="/your_account/image 57.svg"  width={"34px"} height={"34 px"}/> */}

                    </div>
                    <div className={styles.compotext}>
                        <text className={styles.text1}>Archived orders</text>
                        <text className={styles.text2}>View and manage your archived orders</text>
                    </div>

                </div>
            </div>
            <div className={styles.aline}>
                <div className={styles.compo1}>
                    <div className={styles.imgDiv}>
                        <Image className={styles.overlapimg} src="/your_account/image 60 (1).svg" width={"34px"} height={"34px"} />
                        {/* <Image className={styles.overlapimg} src="/your_account/image 57.svg"  width={"34px"} height={"34 px"}/> */}

                    </div>
                    <div className={styles.compotext}>
                        <text className={styles.text1}>Your Subscription</text>
                        <text className={styles.text2}>View or manage your subscriptions</text>
                    </div>

                </div>
                <div className={styles.compo1}>
                    <div className={styles.imgDiv}>
                        <Image className={styles.overlapimg} src="/your_account/image 186.svg" width={"34px"} height={"34px"} />
                        {/* <Image className={styles.overlapimg} src="/your_account/image 57.svg"  width={"34px"} height={"34 px"}/> */}

                    </div>
                    <div className={styles.compotext}>
                        <text className={styles.text1}>Your Addresses</text>
                        <text className={styles.text2}>Edit Addresses for Orders and Gifts</text>
                    </div>

                </div>
              
            </div>
            <div className={styles.line_H1}></div>
        </>
    )
}
export default Youraccount