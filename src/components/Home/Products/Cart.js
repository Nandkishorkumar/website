import React from 'react';
import productarray from './product-array';
import styles from './product.module.css';
import Image from "next/image";


const Cart = () => {
  return (
    <div className={styles.content}>
      <div><Image src="/Home/assets/left.svg" alt="" width={'25px'} height={"65.63px"} /></div>
      <div className={styles.main__cart}>
        {
          productarray.map((val, ind) =>
            <>
              <div className={styles.container_cart}>
                <div className={styles.product_img}>
                <div className="image__badge" style={{position:'absolute' , top:'-1.5rem', right:'-12px',height:'50px',width:'50px',zIndex:'1'}}>
                <Image src="/Home/assets/badge.svg" alt="" className={styles.product_badge} width={'50px'} height={"50px"} />
                </div>      
                  <Image className={styles.cart_image} src={val.rpic} alt="img not found" width={'194.77px'} height={"225.25px"} />
                  <p className={styles.image_text} style={{left:`${val.imgtextleft}`}}>{val.imgtext}</p>
                </div>
                <div className={styles.cartprice}>
                  <button className={styles.hearticonbutton}><Image src="/Home/assets/heart.svg" alt="" className="hearticon" width={'13.14px'} height={"10.69px"} /></button>
                  <p className={styles.text_quant}>{val.rquant}</p>
                  <p className={styles.text_price}>{val.rprice} <sup>{val.rsub}</sup></p>
                </div>
                <button className={styles.add_to_cart}>
                  Add to Cart
                  <Image src="/Home/assets/cartbucket.svg" alt="" width={'25px'} height={"22.22px"} />
                </button>
              </div>
            </>
          )
        }
      </div>
      <div><Image src="/Home/assets/right.svg" alt="" width={'25px'} height={"65.63px"} /></div>
    </div>

  )
}

export default Cart
