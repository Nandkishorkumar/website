import React from 'react';
import styles from './../Touch/touch.module.css';
import styless from './../catagory/catagory.module.css';
import Cart from './Cart';

const ProductHeading = () => {
    return (
        <div className={styles.main_product} style={{height:'800px' , display:'flex',flexDirection:'column',alignItems:'center',justifyContent: 'center'}}>
                <div className={styles.main_theading}>
                    <div className={styles.theading}>
                        <p>Our Feature Products</p>
                    </div>
                    <div className={styless.ptouch}>
                        <p>Shop trending items</p>
                    </div>
                </div>
                <div className="productCart" style={{marginTop:'20px' , width: '100%'}}>
                <Cart />
                </div>
            </div>
    )
}

export default ProductHeading
