import React from 'react'
import styles from './rating.module.css';
import Image from "next/image";
import RightRating from './RightRating'

const MainRating = () => {
    return (
        <div className={styles.main_rating}>
        <div className={styles.rating_left}>
            <div className={styles.rating_left_haeding}>
                <p>Ratings & Reviews</p>
            </div>
            <div className={styles.rating_left_cart}>
                <p className={styles.rleft_heading}>What makes a good review</p>
                <div className={styles.rleft_text}>
                    <p className={styles.rleft_text_heading1}>Have you used this product?</p>
                    <p className={styles.rleft_text_text1}>Your review should be about your experience with the product.</p>
                    <Image src ="/RatingReview/assets/ratingleftbar.svg" height={'2px'} width={'340px'} />
                    <p className={styles.rleft_text_heading1}>Why review a product?</p>
                    <p className={styles.rleft_text_text1}>Your valuable feedback will help fellow shoppers decide!</p>
                    <Image src ="/RatingReview/assets/ratingleftbar.svg" height={'2px'} width={'340px'} />
                    <p className={styles.rleft_text_heading1}>How to review a product?</p>
                    <p className={styles.rleft_text_text3}>Your review should include facts. An honest opinion is always appreciated. If you have anissue with the products or service please contact us from the help centre</p>
                </div>
            </div>
        </div>
        <div className={styles.main_right_rating}>
       <RightRating />
        </div>
        </div>
    )
}

export default MainRating
