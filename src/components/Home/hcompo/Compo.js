import React from 'react';
import styles from './hcompo.module.css';
import data from './data';
import Image from "next/image";
const Compo = () => {
  return (
    <>
      <div className={styles.main_cart} >
        {
          data.map((val, ind) =>

            <>
              <div className={styles.main}>
                <div className={styles.cart} key={ind} style={{ backgroundColor: `${val.bgcolor}` }}>
                  <div className={styles.hcart} style={{ color: `${val.hcolor}`, marginTop:'12px' }}>
                    <p style={{ width:`${val.width}`,height:`${val.height}`}}>{val.title}</p>
                  </div>
                  <div className={styles.tcart}>
                    <p>{val.text}</p>
                  </div>
                  <div className={styles.pcart}>
                    <Image src={val.imgsrcc} alt="pic not found" width={'266px'} height={'182px'} />
                  </div>
                </div>

                <div className={styles.button_main}>
                  <button className={styles.button} style={{ backgroundColor: `${val.buttoncolor}`, borderColor: `${val.bordercolor}` }}>{val.button}</button>
                </div>

              </div>
            </>
          )

        }
      </div>
    </>

  )
}

export default Compo
