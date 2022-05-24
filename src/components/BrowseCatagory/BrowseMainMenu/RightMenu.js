import React from 'react';
import styles from './mainmenu.module.css';
import Image from "next/image";
import rightmenuimage, { rightmenuimage2 , rightheadin2image , rightheadin3image } from './RightMenuImage';

const RightMenu = () => {
    return (
        <div className={styles.browserightmenu}>
            <div className={styles.rightheading1}>
                <p className={styles.rightheading}>Browse by Catagory</p>
                <p className={styles.rightviewall}>View all</p>
            </div>
            <div className={styles.rightmainimage}>
                <div className={styles.image1_heading}>
                    {
                        rightmenuimage.map((val, ind) =>
                            <>
                                <div className={styles.rightheading1image}>
                                    <Image src={val.img1} height={'252px'} width={'271px'} className={styles.rightimage} />
                                    <p>{val.imgtext}</p>
                                </div>
                            </>
                        )
                    }
                </div>
                <div className={styles.image1_heading}>
                    {
                        rightmenuimage2.map((val, ind) =>
                            <>
                                <div className={styles.rightheading1image}>
                                    <Image src={val.img2} height={'252px'} width={'271px'} className={styles.rightimage} />
                                    <p>{val.imgtext2}</p>
                                </div>
                            </>

                        )
                    }
                </div>
            </div>
            <Image src="/BrowseCatagory/assets/rightbar.svg" width={'846px'} height={'2px'}/>
            <div className={styles.rightheading1}>
                <p className={styles.rightheading}>Browse by Dietary Preference</p>
                <p className={styles.rightviewall}>View all</p>
            </div>
            <div className={styles.rightmainimage}>
                <div className={styles.image1_heading}>
                    {
                        rightheadin2image.map((val, ind) =>
                            <>
                                <div className={styles.rightheading1image}>
                                    <Image src={val.img3} height={'252px'} width={'271px'} className={styles.rightimage} />
                                    <p>{val.imtext3}</p>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
            <Image src="/BrowseCatagory/assets/rightbar.svg" width={'846px'} height={'2px'}/>
            <div className={styles.rightheading1}>
                <p className={styles.rightheading}>Browse by Food Groups</p>
                <p className={styles.rightviewall}>View all</p>
            </div>
            <div className={styles.rightmainimage}>
                <div className={styles.image1_heading}>
                    {
                        rightheadin3image.map((val, ind) =>
                            <>
                                <div className={styles.rightheading1image}>
                                    <Image src={val.img4} height={'252px'} width={'271px'} className={styles.rightimage} />
                                    <p>{val.imtext4}</p>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default RightMenu
