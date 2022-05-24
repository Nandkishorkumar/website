import RatingStars from '@components/common/RatingStars';
import React from 'react';
import styles from './styles.module.css';

interface Props {
  product: any;
}

export default function ProductDetailsRightSide({ product }: Props) {
  return (
    <div>
      <div className={styles.name_rating_container}>
        <p className={styles.product_name}>{product.name}</p>
        <RatingStars size={21.49} rating={product.rating} />
      </div>
    </div>
  );
}
