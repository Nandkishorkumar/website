import React from 'react'
import styles from './Subscription.module.css';
import Image from "next/image"
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { style } from '@mui/system';
import Path from '@components/path/Path';
import SubsComponent from './SubsComponent';



const SubscriptionData = [
    {
        Subscription_start_date: 'Apr 27 2021',
        Next_payment_date: 'Apr 26 2022',
        Subscription_frequency: 'Every Monday',
        Subscription_id: 82828212,
        total_product: 4,
        Total: 30,
        last4: 1234,
        expire: "4/2022",
        userName: "nand",
        short_add: "Arlington... 60004",
        status: 'hold'

    },
    {
        Subscription_start_date: 'Apr 27 2021',
        Next_payment_date: 'Apr 26 2022',
        Subscription_frequency: 'Every Monday',
        Subscription_id: 9304247,
        total_product: 6,
        Total: 35,
        last4: 1243,
        expire: "4/2023",
        userName: "nand kishor",
        short_add: "Arlington... 60004",
        status: 'active'

    },
    {
        Subscription_start_date: 'Apr 27 2021',
        Next_payment_date: 'Apr 26 2022',
        Subscription_frequency: 'Every Monday',
        Subscription_id: 9304247,
        total_product: 7,
        Total: 36,
        last4: 1267,
        expire: "4/2025",
        userName: "Gurpreet",
        short_add: "Arlington... 60004",
        status: 'cancel'



    },
    {
        Subscription_start_date: 'Apr 27 2021',
        Next_payment_date: 'Apr 26 2022',
        Subscription_frequency: 'Every Monday',
        Subscription_id: 9304247,
        total_product: 2,
        Total: 33,
        last4: 1278,
        expire: "4/2027",
        userName: "amrinder",
        short_add: "Arlington... 60004",
        status: 'camcel'

    },
    {
        Subscription_start_date: 'Apr 27 2021',
        Next_payment_date: 'Apr 26 2022',
        Subscription_frequency: 'Every Monday',
        Subscription_id: 9304247,
        total_product: 40,
        Total: 300,
        last4: 1290,
        expire: "4/2029",
        userName: "Jagdeep",
        short_add: "Arlington... 60004",
        status: 'hold'

    },
    {
        Subscription_start_date: 'Apr 27 2021',
        Next_payment_date: 'Apr 26 2022',
        Subscription_frequency: 'Every Monday',
        Subscription_id: 9304247,
        total_product: 40,
        Total: 300,
        last4: 1290,
        expire: "4/2029",
        userName: "Jagdeep",
        short_add: "Arlington... 60004",
        status: 'hold'

    },
    {
        Subscription_start_date: 'Apr 27 2021',
        Next_payment_date: 'Apr 26 2022',
        Subscription_frequency: 'Every Monday',
        Subscription_id: 9304247,
        total_product: 40,
        Total: 300,
        last4: 1290,
        expire: "4/2029",
        userName: "Jagdeep",
        short_add: "Arlington... 60004",
        status: 'hold'

    },{
        Subscription_start_date: 'Apr 27 2021',
        Next_payment_date: 'Apr 26 2022',
        Subscription_frequency: 'Every Monday',
        Subscription_id: 9304247,
        total_product: 40,
        Total: 300,
        last4: 1290,
        expire: "4/2029",
        userName: "Jagdeep",
        short_add: "Arlington... 60004",
        status: 'hold'

    },
]

export default function Subscription() {
    const [value, setValue] = React.useState(0);
    const [AllSubs, setAllSubs] = React.useState(true);
    const [ActiveSubs, setActiveSubs] = React.useState(false);
    const [HoldSubs, setHoldSubs] = React.useState(false);
    const [CancelSubs, setCancelSubs] = React.useState(false);


    function setter(val) {
        if (val == '0') {
            setAllSubs(true)
            setActiveSubs(false)
            setHoldSubs(false)
            setCancelSubs(false)

        }
        else if (val == '1') {
            setAllSubs(false)
            setActiveSubs(true)
            setHoldSubs(false)
            setCancelSubs(false)

        }
        else if (val == '2') {
            setAllSubs(false)
            setActiveSubs(false)
            setHoldSubs(true)
            setCancelSubs(false)

        }
        else if (val == '3') {
            setAllSubs(false)
            setActiveSubs(false)
            setHoldSubs(false)
            setCancelSubs(true)

        }

    };



    return (
        <>
            <div className={styles.path_aline}>
                <Path />
            </div>
            <p className={styles.header} >Your Subscription</p>
            <Box className={styles.Box} >
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                        setter(newValue)
                    }}
                >
                    <BottomNavigationAction label="All Subscription" />
                    <BottomNavigationAction label="Active Subscription" />
                    <BottomNavigationAction label="Subscription on Hold" />
                    <BottomNavigationAction label="Cancelled Subscription" />

                </BottomNavigation>
            </Box>
            <div className={styles.line_H1}></div>
            {
                AllSubs ? <>
                    <SubsComponent data={SubscriptionData} />
                </> : <></>
            }
            {
                CancelSubs ? <>
                    <SubsComponent data={SubscriptionData} />
                </> : <></>
            }
            {
                ActiveSubs ? <>
                    <SubsComponent data={SubscriptionData} />
                </> : <></>
            }
            {
                HoldSubs ? <>
                    <SubsComponent data={SubscriptionData} />
                </> : <></>
            }
        </>
    );
}
