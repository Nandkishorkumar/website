import React from 'react';
import catagory from './catagory';
import styles from './catagory.module.css';
import Image from "next/image";

const CatagoryCart = () => {
    return (
        <div className={styles.content}>
        <div><Image src="/Home/assets/left.svg" alt="" width={'25px'} height={"65.63px"}/></div>
        <div className={styles.main__cart}>
            {
                catagory.map((val, ind) =>
                    <>
                        <div className={styles.container__cart}>
                            <Image className={styles.cart_image} width={`${val.catwidth}`}  height={`${val.catheight}`} src={val.catpic}  alt="img not found" />
                            <div className={styles.cart_catagory}>
                                <p className={styles.text_head} style={{width:`${val.headwidth}`}}>{val.catheading}</p>
                                <p className={styles.text_text} style={{marginTop:'15px'}}>{val.catext}</p>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
        <div><Image src="/Home/assets/right.svg" alt="" width={'25px'} height={"65.63px"} /></div>
    </div>
    )
}

export default CatagoryCart
