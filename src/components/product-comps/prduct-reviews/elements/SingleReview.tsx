import React from 'react';
import styles from './SingleReview.module.css';
import Image from 'next/image';
import RatingStars from '@components/common/RatingStars';

interface Props {
  review: Review;
}
export interface Review {
  full_name: string;
  rating: number;
  review_date: string;
  heading: string;
  review: string;
  profile_pic_url: string;
}

export default function SingleReview({ review }: Props) {
  return (
    <div className={styles.review_container}>
      <div>
        <Image
          src={review.profile_pic_url}
          height={49}
          width={49}
          className={styles.profile_pic}
        />
      </div>
      <div>
        <p className={styles.username}>{review.full_name}</p>
        <RatingStars size={17} rating={review.rating} />
        <p className={styles.review_heading}>{review.heading}</p>
      </div>
    </div>
  );
}
