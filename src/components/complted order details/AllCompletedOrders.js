import { style } from '@mui/system';
import React from 'react';
// import { CloseButton } from 'react-toastify/dist/components';
import styles from './indi.module.css';
import Image from "next/image"


const AllCompletedOrders = () => {
    const product_data = [{
        product_name: "Pasteurised Unhomogenized Full Cream Milk - 5 Litre",
        price: 100,
        quantity: 2,
        weight: "5L",
        total: 200
    },
    {
        product_name: "Pasteurised Unhomogenized Full Cream Milk - 5 Litre",
        price: 100,
        quantity: 3,
        weight: "5L",
        total: 300
    },
    {
        product_name: "Pasteurised Unhomogenized Full Cream Milk - 5 Litre",
        price: 100,
        quantity: 4,
        weight: "5L",
        total: 400
    },
    {
        product_name: "Pasteurised Unhomogenized Full Cream Milk - 5 Litre",
        price: 100,
        quantity: 5,
        weight: "5L",
        total: 500
    },
    ]
    return (
        <div className={styles.popInCenter}>
            <div className={styles.mainPopUp}>
                <div className={styles.popHeader}>
                    <div className={styles.header_balance}>
                        <p className={styles.popHeaderText}>Your All Completed Orders</p>
                        {/* <CloseButton  variant="white" /> */}
                        <div className={styles.close_button}>
                            {/* <Image className={styles.button_color} src="/completed_order/closeButton.png" width={'13.5px'} height={'13.5px'} /> */}
                            {/* <Image className={styles.button_color} src="/completed_order/Vector 636.png" width={'13.5px'} height={'13.5px'} /> */}
                            <Image src="/completed_order/Group 8728.svg" width={'13.5px'} height={'13.5px'} />


                        </div>

                    </div>
                </div>
                <div className={styles.popHeader2}>
                    <div>
                        <text className={styles.popUpColumnIndex}>Orders</text>
                    </div>
                    <div className={styles.qwt}>
                        <p className={styles.qwt_text}>Quantity</p>
                        <p className={styles.qwt_text}>Weight</p>
                        <p className={styles.qwt_text}>Total</p>
                    </div>

                </div>
                <div>
                    <div className={styles.line_H}></div>
                    {
                        product_data.map(function (item, i) {
                            return (
                                <>
                                    <div className={styles.product_aline}>
                                        <div className={styles.product_aline}>
                                            <div className={styles.imgpad}>
                                                <img src="\completed_order\milkpack.png" />
                                            </div>
                                            <div className={styles.text_product_render}>
                                                {product_data[i].product_name}
                                                <p className={styles.total1}>${product_data[i].price}</p>
                                            </div>

                                        </div>
                                        <div className={styles.qwt1}>
                                            <p className={styles.weight}>{product_data[i].quantity}</p>
                                            <p className={styles.weight}>{product_data[i].weight}</p>
                                            <p className={styles.total}>${product_data[i].total}</p>
                                        </div>
                                    </div>
                                    <div className={styles.line_H1}></div>
                                    

                                </>
                            )
                        })
                    }
                </div>



            </div>

        </div>
    );
}
export default AllCompletedOrders