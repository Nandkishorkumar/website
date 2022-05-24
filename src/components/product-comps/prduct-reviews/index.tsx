import React from 'react';
import SingleReview, { Review } from './elements/SingleReview';
import styles from './styles.module.css';

interface Props {
  reviews: Review[];
}

export default function ProductReviews({ reviews }: Props) {
  return (
    <div>
      <div className={styles.top_container}>
        <p className={styles.heading}>Reviews</p>
        <button className={styles.rate_product}>Rate Product</button>
      </div>
      <div>
        {reviews.map((review, index) => (
          <SingleReview key={index} review={review} />
        ))}
      </div>
    </div>
  );
}
