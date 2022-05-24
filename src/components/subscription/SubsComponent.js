import React from 'react'
import styles from './Subscription.module.css';
import Image from "next/image"


export default function SubsComponent(props) {
    let SubscriptionData=props.data
    console.log(SubscriptionData)
    return (
        <>
            {
                SubscriptionData.map((value) => (
                    <div className={styles.Sub}>
                        <div className={value.status == 'active' ? styles.componentHeader : value.status === 'hold' ? styles.componentHeader_onHold : styles.componentHeader_cancel}>
                            <div className={styles.HeaderLeftMainDiv}>
                                <div className={styles.Subscription_start_date}>
                                    <p>Subscription Start Date</p>
                                    <p className={styles.footerText}>{value.Subscription_start_date}</p>
                                </div>
                                <div className={styles.Subscription_next_payment}>
                                    <p>Next payment Date</p>
                                    <p className={styles.footerText}>{value.Next_payment_date}</p>
                                </div>
                                <div className={styles.Subscription_next_payment}>
                                    <p>Subscription Frequency</p>
                                    <p className={styles.footerText}>{value.Subscription_frequency}</p>
                                </div>
                            </div>
                            <div className={styles.HeaderRightMainDiv} >
                                <p className={styles.subId}>Subscription ID</p>
                                <p className={styles.SubsText}>{value.Subscription_id}</p>
                            </div>
                        </div>
                        <div className={styles.main_info_box} >
                            <div className={styles.main_left_div}>
                                <div className={styles.img_setter} >
                                    <Image src="/completed_order/Rectangle 807.svg" width={"88px"} height={"133px"} />
                                </div>
                                <div className={styles.product_info} >
                                    <p>Pasteurised Unhomogenized Full Cream Milk - 5 Litre
                                        Qnty - 2</p>
                                    <p className={styles.more_tag} >+ {value.total_product} more</p>
                                </div>
                            </div>
                            <div className={styles.main_right_div}>
                                <div className={value.status == 'active' ? styles.Payment_method : value.status == 'hold' ? styles.Payment_method_onHold : styles.Payment_method_cancel}>
                                    <div className={value.status == 'active' ? styles.stickers : value.status == 'hold' ? styles.stickers_onHold : styles.stickers_cancel}>
                                        <p className={styles.name} >Payment Method</p>
                                    </div>
                                    <p className={styles.text} >Billed ${value.Total}/week using</p>
                                    <div className={styles.card_details}>
                                        <Image src="/completed_order/image 56.svg" width={"57px"} height={"24px"} />
                                        <p className={styles.text1}>Ending in {value.last4}</p>
                                    </div>
                                    <div className={styles.expire_details}>
                                        <p>Expire on</p>
                                        <p>{value.expire}</p>
                                    </div>

                                </div>
                                <div className={value.status == 'active' ? styles.Payment_method_bottom_tab : value.status == 'hold' ? styles.Payment_method_bottom_tab_onHold : styles.Payment_method_bottom_tab_cancel} >
                                    <p className={value.status == 'active' ? styles.username : value.status == 'hold' ? styles.username_onHold : styles.username_cancel}>{value.userName}...</p>
                                    <p className={styles.text2} >{value.short_add}</p>
                                </div>
                            </div>
                        </div>
                        <div className={value.status == 'active' ? styles.footer : value.status == 'hold' ? styles.footer_onHold : styles.footer_cancel}>
                            <button className={styles.viewButton}>View / Manage</button>
                            {
                                value.status == 'active' ?
                                    <button className={styles.viewButton1}>
                                        <p>Active</p>
                                        <Image src="/completed_order/Vector 655.svg" width={"22px"} height={"15px"} />
                                    </button> :
                                    value.status == 'hold' ?
                                        <button className={styles.viewButton_onHold}>
                                            <p>Hold</p>
                                            <Image src="/completed_order/Group.svg" width={"24px"} height={"23px"} />
                                        </button> :
                                        <button className={styles.viewButton_cancel}>
                                            <p>Cancelled</p>
                                            {/* <Image src="/completed_order/Vector 655.svg" width={"22px"} height={"15px"}/> */}
                                        </button>
                            }

                        </div>

                    </div>
                )

                )
            }
        </>
    )
}
