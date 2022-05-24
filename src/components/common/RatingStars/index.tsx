import React from 'react';
import styles from './styles.module.css';

interface Props {
  size: number;
  rating: number;
}

export default function RatingStars({ size, rating }: Props) {
  return (
    <div className={styles.stars_container}>
      {[1, 2, 3, 4, 5].map((i) =>
        i <= rating ? (
          <svg
            width={size - 1}
            height={size}
            viewBox={`0 0 ${size - 1} ${size}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.53873 1.35296C4.81564 0.387087 6.18436 0.387089 6.46128 1.35297L6.97617 3.14895C7.09913 3.57782 7.4913 3.87336 7.93745 3.87336H9.84529C10.7835 3.87336 11.2052 5.04894 10.4809 5.64533L8.73094 7.08631C8.42346 7.33949 8.29555 7.751 8.40532 8.13387L9.02177 10.2841C9.29235 11.2279 8.18278 11.9558 7.42484 11.3317L6.13565 10.2701C5.76642 9.96608 5.23358 9.96608 4.86435 10.2701L3.57516 11.3317C2.81722 11.9557 1.70765 11.2279 1.97823 10.2841L2.59468 8.13387C2.70445 7.751 2.57654 7.33949 2.26906 7.08631L0.519058 5.64533C-0.205227 5.04894 0.216487 3.87336 1.15471 3.87336H3.06255C3.5087 3.87336 3.90087 3.57781 4.02383 3.14895L4.53873 1.35296Z"
              fill="#70A42F"
            />
          </svg>
        ) : (
          <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.04372 1.12709C5.33222 0.183672 6.66778 0.183671 6.95628 1.12709L7.57973 3.16579C7.7083 3.58622 8.09638 3.87336 8.53602 3.87336H10.6765C11.6305 3.87336 12.0428 5.08199 11.2876 5.66494L9.45365 7.08066C9.12422 7.33496 8.98673 7.76671 9.10843 8.16468L9.784 10.3738C10.069 11.3059 8.98821 12.0535 8.21666 11.4579L6.61106 10.2184C6.25108 9.94053 5.74892 9.94053 5.38894 10.2184L3.78334 11.4579C3.01179 12.0535 1.93096 11.3059 2.21599 10.3738L2.89157 8.16468C3.01327 7.76671 2.87578 7.33496 2.54635 7.08066L0.712397 5.66494C-0.0427631 5.08199 0.36947 3.87336 1.32346 3.87336H3.46398C3.90362 3.87336 4.2917 3.58622 4.42027 3.16579L5.04372 1.12709Z"
              fill="#BDBDBD"
            />
          </svg>
        )
      )}
    </div>
  );
}