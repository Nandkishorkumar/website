import React from 'react';
import Divider from '../elements/Divider';
import ProductReviews from '../prduct-reviews';
import ProductDescription from '../product-description';
import QuestionAnswers from '../question-answers';
import styles from './styles.module.css';

interface Props {
  product: any;
}

export default function ProductDetailSelector({ product }: Props) {
  const { questions, reviews, description } = product;

  const [selected, setSelected] = React.useState<number>(0);

  const details = [
    <ProductDescription description={description} />,
    <ProductReviews reviews={reviews} />,
    <QuestionAnswers questions={questions} />,
  ];
  return (
    <div>
      <div className={styles.detail_selector_container}>
        {['Description', `Reviews (${reviews.length})`, 'Q / A'].map(
          (detail, index) =>
            index == selected ? (
              <p className={styles['detail_selector']}>{detail}</p>
            ) : (
              <p
                className={styles['not_selected']}
                onClick={() => setSelected(index)}
              >
                {detail}
              </p>
            )
        )}
      </div>
      <Divider />
      {details[selected]}
    </div>
  );
}
