import Header from '@components/Home/header/Header'
import Path from '@components/path/Path'
import { StylesProvider } from 'material-ui-core'
import React from 'react'
import styles from './ManagePayments.module.css';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Image from "next/image"
import Line from './Line';
import LookUp from './LookUp';



const cardFlg = true
const userName = "rocky"

function Payments() {
    const [value, setValue] = React.useState(0);

    return (
        <div>
            <Header />
            <div className={styles.breadcrume}>
                <Path />
            </div>
            <div className={styles.box}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction label="Wallet" />
                    <BottomNavigationAction label="Transactions" />

                </BottomNavigation>
            </div>
            <div className={styles.line}></div>
            {
                cardFlg ? <>
                    <div className={styles.addCardNotification}>
                        <div >
                            <Image src="/managePayments/image 225.png" width={"80px"} height={"80px"} />
                        </div>
                        <p className={styles.notification}>Hi {userName}, add a Debit card to your Kisaan Wallet today</p>
                        <button className={styles.noyificationButton}>Add Your Card</button>

                    </div>
                </> : <></>
            }
            <div className={styles.prefrencediv}>
                <p className={styles.simpleText}>Your Default Purchase Preference</p>
                <button className={styles.simpleText1}>Change Preference</button>
            </div>
            <div className={styles.PymentOption}>
                <p className={styles.notification}>Your Payments Options</p>
                <p className={styles.text}>Use this page to set your preferred payment method shipping address, and shipping method.</p>
            </div>
            <div className={styles.compoHeader}>
                <p>Your Credit & Debit Cards</p>
                <p>Expires</p>
            </div>
            <LookUp/>


        </div>
    )
}

export default Payments
