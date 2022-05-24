import React from 'react';
import styles from './browsehistory.module.css';
import Image from "next/image";
import browsehistory from './browsehistory.jsx';

const BrowseProducts = () => {
    return (
        <div className={styles.history_carousel}>
        <div><Image src="/Home/assets/left.svg" alt="" width={'25px'} height={"65.63px"} /></div>
        {
            browsehistory.map((val, ind) =>
                <>
                    <div className={styles.history_cart}>
                        <Image src={val.hisimg} alt="image not found" width={'120px'} height={'120px'} />
                        <div className={styles.hissrating}>
                            <Image src={val.hisrating} alt="image not found" width={'90px'} height={'13.87px'} className={styles.hisrating} />
                        </div>
                        <div className={styles.hhead_heart}>
                            <p className={styles.hcart_heading}>{val.heading}</p>
                            <button className={styles.hheart_button}><Image src="/Home/assets/heart.svg" width={'12.9px'} height={'9.97px'} /></button>
                        </div>
                        <p className={styles.hisprice}>{val.price}<sup className={styles.hisupprice}>{val.subprice}</sup></p>
                        <div className={styles.hisquant}>
                            <p className={styles.hisquanty}>{val.quant}</p>
                            <p className={styles.hisquanteach}>{val.eachquant}</p>
                        </div>
                        <button className={styles.hisadd_to_cart}>
                            Add to Cart
                            <Image src="/Home/assets/cartbucket.svg" alt="" width={'19px'} height={"17px"} />
                        </button>
                    </div>
                </>
            )
        }
        <div><Image src="/Home/assets/right.svg" alt="" width={'25px'} height={"65.63px"} /></div>
    </div>
    )
}

export default BrowseProducts
