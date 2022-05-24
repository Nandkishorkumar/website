import Button from "@components/ui/button"
import { StyleRounded } from "@material-ui/icons"
import { size, stubTrue } from "lodash"
import react from "react"
import styles from './indi.module.css'
import Image from "next/image"
import Upperfooter from '@components/Home/Footer/Upperfooter';
import simple_button from '../common/Buttons/simple_button'
import { style } from "@mui/system"
// import Theading from '@components/Home/Touch/Theading';

const completeOrder = () => {
    const Data =
    {
        customer_name: "nandu",
        orderPlacedDate: "Sept 21,2021",
        deliveryDate: "Oct 2,2021",
        orderId: "1234",
        shippingAddress: "1507 W Lillian AveArlington Heights,IL 60004-3626 United States Phone: 1234567890",
        billingAddress: "1507 W Lillian AveArlington Heights,IL 60004-3626 United States Phone: 1234567890",
        paymentMethod: " 7895"
    }
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
        <>
           
            <div className={styles.rectangle}>
                <h4 className={styles.text}>Do you want to buy these items again?</h4>
                <button className={styles.button}>Add all item to cart</button>
            </div>
            <div className={styles.heading}>
            <text className={styles.text2}>Your Completed Orders</text>
            </div>
            <div className={styles.rectangle878}>
                <div className={styles.rectangle837}>
                    <p className={styles.orderPlacedDate}>ORDER PLACED<br />{Data.orderPlacedDate}</p>
                    <p className={styles.deliveryDate}>DELIVERY DATE<br />{Data.deliveryDate}</p>
                    <p className={styles.orderId}>ORDER ID: #{Data.orderId}<br/>
                    <p className={styles.Invoice}>invoice</p>
                    </p>
                </div>
                <div className={styles.details}>
                    <div className={styles.left_containt}>
                        <div className={styles.upeer_left}>
                            <div>
                                <h1 className={styles.h1}>Shipping address</h1>
                                <h2 className={styles.h2}>{Data.customer_name}</h2>
                                <div className={styles.address}>
                                    {Data.shippingAddress}
                                </div>
                            </div>
                            <div className={styles.line}></div>
                            <div>
                                <h1 className={styles.h1}>Billing Address</h1>
                                <h2 className={styles.h2}>{Data.customer_name}</h2>
                                <div className={styles.address}>
                                    {Data.billingAddress}
                                </div>
                            </div>
                            <div className={styles.line}></div>
                            <div className={styles.h3}>
                                <h1 className={styles.h1}>Payment Method</h1>
                                <div className={styles.payment_detals_seprator}>
                                    <div className={styles.logo_seprator}>
                                        <img src="\completed_order\card_logo.png" />
                                    </div>
                                    <div>
                                        <h2 className={styles.h2}>{` `}ending with {Data.paymentMethod}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.lower_left}>
                            <div className={styles.product_div}>
                                <div>
                                    <img src="\completed_order\milkpack.png" />
                                </div>
                                <div>
                                    <div className={styles.product_name}>{product_data[0].product_name}</div>
                                    <div className={styles.return_window}>Return window closed on Oct 21, 2016</div>
                                    <div className={styles.show_price}>${product_data[0].price}</div>
                                    <h2 className={styles.more_product}>+{product_data.length}more</h2>
                                </div>
                                <div className={styles.buttons}>
                                    {/* <button className={styles.buy_all_again_button}>
                                        <div className={styles.button_img}>
                                            <p>Buy all Items again</p>
                                            <Image src="/completed_order/Vector.png" width={"13px"} height={"15px"} />
                                        </div>

                                    </button>
                                    <button className={styles.review_button}>Write a product review</button>
                                    <button className={styles.review_button}>Archive order</button> */}
                                   <button className={styles.buy_all_again_button}>
                                    <div className={styles.button_img}>
                                   <p className={styles.color_white}>Buy all Items again</p>
                                   <Image  src="/completed_order/Vector.png" width={"13px"} height={"15px"} ></Image>
                                   </div>
                                   </button>
                                   <button className={styles.review_button}>Write a product review</button>
                                   <button className={styles.review_button}>Archive order</button>

                                </div>
                            </div>

                        </div>

                    </div>

                    <div className={styles.right_containt}>
                        <h1 className={styles.text3}>Order Summary</h1>
                        <div className={styles.summary_box1}>
                            <div className={styles.price_text}>
                                <t>Price</t>
                                <t>$29.54</t>
                            </div>
                            <div className={styles.price_text}>
                                <t>Delivery Charges</t>
                                <t>$5</t>
                            </div>
                            <div className={styles.price_text}>
                                <t>
                                    <text>Discount</text><br/>
                                    <text className={styles.color_green}>( for free delivery coupon applied )</text>
                                </t>
                                <t className={styles.color_green}>-$5</t>
                            </div>
                            <div className={styles.price_text}>
                                <t>
                                    <text>Total Amount</text><br/>
                                    <text className={styles.color_green}>Due Today</text>
                                </t>
                                <t>$24.54</t>
                            </div>

                        </div>
                        <div className={styles.summary_box2}>
                            <h1 className={styles.text4}>Recurring Total</h1>
                            <div className={styles.price_text}>
                                <t>Subtotal</t>
                                <t>$15.50 / week</t>
                            </div>
                            <div className={styles.price_text}>
                                <t>Delivery Charges</t>
                                <t>$2.49 / Delivery</t>
                            </div>
                            <div className={styles.price_text}>
                                <t>Recurring Total</t>
                                <t>$17.99 / week</t>
                            </div>
                            


                        </div>
                    </div>
                    

                </div>
                <div className={styles.printInvoice}>
                    <button className={styles.printInvoice_button_text}>View or Print invoice</button>
                </div>
                {/* <div className={styles.footer}><Upperfooter/></div> */}
            </div>



        </>
    )
}
export default completeOrder