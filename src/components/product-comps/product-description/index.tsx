import React from 'react';
import styles from './styles.module.css';

interface Props {
  description: string;
}

export default function ProductDescription({ description }: Props) {
  const [showMore, setShowMore] = React.useState<boolean>(false);
  return (
    <div className={styles.description_text}>
      {!showMore && description.length > 266 ? (
        <>
          <span>{description.slice(0, 266)}</span>

          <p
            className={styles.more_btn}
            onClick={() => {
              setShowMore(true);
            }}
          >
            more
          </p>
        </>
      ) : (
        description
      )}
    </div>
  );
}
