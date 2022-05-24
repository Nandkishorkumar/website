import Header from '@components/Home/header/Header'
import Path from '@components/path/Path'
import React from 'react'
import styles from './MyOrderPage.module.css';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import DetailsPop from './DetailsPop';
import Image from "next/image"
import Button from './Button';
import Poopup from './Poopup';
import Modal from './ModalTest';
import Dialog from './Dialogpop';
import { style, width } from '@mui/system';
import Link from '@components/ui/link';


const backupMethod = true
const Data = [
    {
        order_placed: "April  27, 2021",
        total: 500,
        productCount: 4,
        created_by: "checkout",
        current_date: "Friday 30 August, 2021",
        productName: "Pasteurised Unhomogenized Full Cream Milk - 5 Litre (Dairy Product)",
        order_id: 89892344265751234
    },
    {
        order_placed: "April  27, 2021",
        total: 500,
        productCount: 4,
        created_by: "checkout",
        current_date: "Friday 30 August, 2021",
        productName: "Pasteurised Unhomogenized Full Cream Milk - 5 Litre (Dairy Product)",
        order_id: 898923442
    },
    {
        order_placed: "April  27, 2021",
        total: 500,
        productCount: 4,
        created_by: "checkout",
        current_date: "Friday 30 August, 2021",
        productName: "Pasteurised Unhomogenized Full Cream Milk - 5 Litre (Dairy Product)",
        order_id: 898923442
    },
    {
        order_placed: "April  27, 2021",
        total: 500,
        productCount: 4,
        created_by: "checkout",
        current_date: "Friday 30 August, 2021",
        productName: "Pasteurised Unhomogenized Full Cream Milk - 5 Litre (Dairy Product)",
        order_id: 898923442
    },
    {
        order_placed: "April  27, 2021",
        total: 500,
        productCount: 4,
        created_by: "checkout",
        current_date: "Friday 30 August, 2021",
        productName: "Pasteurised Unhomogenized Full Cream Milk - 5 Litre (Dairy Product)",
        order_id: 898923442
    },
]

export default function OrderPage() {
    const [value, setValue] = React.useState(0);

    return (
        <div>
            <Header />
            <div>
                <Path />
                <p className={styles.header}>Your Orders</p>
            </div>
            <Box className={styles.Box} >
                <div className={styles.parentdiv}>
                    <BottomNavigation
                        className={styles.buttonNav}
                        showLabels
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    >
                        <BottomNavigationAction label="Orders" />
                        <BottomNavigationAction label="Buy Again" />
                        <BottomNavigationAction label="Cancelled Orders" />
                    </BottomNavigation>
                    <div className={styles.inputdiv}>
                        <input className={styles.inputArea} type="search" placeholder="Products and Recepies" aria-label="Search"></input>
                        <button className={styles.searchbutton}>
                            <Image src="/completed_order/Union.svg" width={"45px"} height={"45px"} />
                        </button>
                    </div>
                </div>


                <div className={styles.allComponent}>
                    <div className={styles.line_H1}></div>
                    <div >
                        <div className={styles.range}>
                            <p className={styles.Text}>Order placed in</p>
                            <select className={styles.drop} value="3 month">
                                <option value="30days">Past 30 days</option>
                                <option value="3 month">Last 3 month</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>

                            </select>

                        </div>
                        {
                            backupMethod ? <>
                                <div className={styles.backupmethod}>
                                    <div className={styles.backupImg}>
                                        <Image src="/completed_order/Group 56.svg" width={"33px"} height={"33px"} />
                                    </div>
                                    <div>
                                        <p className={styles.backupheader}>Backup payment method used</p>
                                        <p className={styles.backupheader2}>
                                            <p>We could’nt charge your selected payment method, so we charged your
                                                backup payment method
                                            </p>
                                            <button className={styles.hotlink}>. Learn More</button>
                                        </p>
                                    </div>

                                </div>
                                <div className={styles.line_H2}></div>

                            </> :
                                <>
                                </>
                        }
                    </div>

                    {
                        Data.map((data) => (
                            <div className={styles.completeContainer}>
                                <div className={styles.containerHeader}>
                                    <div className={styles.containerHeaderLeft}>
                                        <p className={styles.text1}>
                                            <p>ORDER PLACED</p>
                                            <p className={styles.dyanmicText}>{data.order_placed}</p>
                                        </p>
                                        <p className={styles.text1}>
                                            <p>Total</p>
                                            <p className={styles.dyanmicText}>$ {data.total}</p>
                                        </p>
                                        <p className={styles.text1}>
                                            <p>Created Via</p>
                                            <p className={styles.dyanmicText}>{data.created_by}</p>
                                        </p>
                                    </div>
                                    <div className={styles.containerHeaderright}>
                                        <p className={styles.text2}>ORDER # {data.order_id}</p>
                                        {/* <DetailsPop /> */}
                                        {/* <Dialog/> */}
                                        {/* <Poopup/> */}
                                        <Modal />
                                    </div>

                                </div>
                                <div className={styles.containerBody}>
                                    <div className={styles.leftBody}>
                                        <p className={styles.bodyHeader}>
                                            <p>In Progress</p>
                                            <p className={styles.dyanmicText}>{data.current_date}</p>
                                        </p>
                                        <div className={styles.productDetail}>
                                            <Image src="/completed_order/milkpack.png" width={"87px"} height={"137px"} ></Image>
                                            <div className={styles.productname}>
                                                <p >{data.productName}</p>
                                                <p className={styles.extra}>+ {data.productCount} more</p>
                                                <button className={styles.buyItAgain}>
                                                    <p>Buy it Again</p>
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                    <div className={styles.rightBody}>
                                        <Button ButtonName='Track Order' />
                                        <Button ButtonName='Change Delivery Date' />
                                        <Button ButtonName='Cancel Order' />
                                        <Button ButtonName='Add Delivery Instructions' />
                                        <Button ButtonName='Leave a Delivery Feedback' />
                                        <Button ButtonName='Archive Order' />

                                    </div>
                                </div>

                            </div>
                        ))

                    }
                </div>
            </Box>
        </div>
    )
}
