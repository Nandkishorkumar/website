import React from 'react';
import styles from './data.module.css';
import detail from './detail';
import Button from "@components/Button/Button";

const Data = () => {
    return (
        <div style={{display:'flex', flexDirection:'column',height:'790px', justifyContent:'space-evenly'}}>
            {
                detail.map((val, ind) =>
                    <>
                        <div className={styles.main}>
                            <div className={styles.detail}>
                                <div>
                                    <p className={styles.p}>{val.p}</p>
                                    <p className={styles.p2}>{val.p2}</p>
                                </div>
                                <div className={styles.data}>{val.data}</div>
                            </div>
                            {val.button ? <div className={styles.button}><Button
                    name="Edit"
                    width="103px"
                    height="38px"
                    radius="7px"
                    fontsize="16px"
                    bgcolor="#EEEEEE"
                    color="#212121"
                     />
                            </div> : <div></div>}

                        </div>
                    </>
                )
            }
            <div className={styles.main} style={{backgroundColor:'#EED1AF'}}>
                <div className={styles.detail}>
                    <div>
                        <p className={styles.p1}>Two-Step Verification (2sv) Settings</p>
                        <p className={styles.p22}>Manage your Two-Step Verification (2SV) Authenticators</p>
                    </div>
                </div>
                <div className={styles.button}><Button
                    name="Edit"
                    width="103px"
                    height="38px"
                    radius="7px"
                    fontsize="16px"
                    bgcolor="#EEEEEE"
                    color="#212121"
                     />
                </div>
            </div>
        </div>
    )
}

export default Data
