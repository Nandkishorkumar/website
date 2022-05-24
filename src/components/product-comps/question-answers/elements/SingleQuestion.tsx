import React from 'react';
import styles from './SingleQuestion.module.css';

interface Props {
  question: Question;
}

export interface Question {
  question: string;
  answers: string[];
}

export default function SingleQuestion({ question }: Props) {
  const [showMore, setShowMore] = React.useState<boolean>(false);
  return (
    <div className={styles.question_container}>
      <div>
        <p className={styles.text}>Question:</p>
        <p className={styles.text}>Answer:</p>
      </div>
      <div>
        <p className={styles.text_secondary}>{question.question}</p>
        <p className={styles.text_secondary}>{question.answers[0]}</p>
        {!showMore && question.answers.length > 1 && (
          <p className={styles.see_more_btn} onClick={() => setShowMore(true)}>
            See more answers ({question.answers.length - 1})
          </p>
        )}
        {showMore &&
          [...question.answers].map((answer, index) =>
            index > 0 ? (
              <li className={styles.text_secondary}>{answer}</li>
            ) : null
          )}
      </div>
    </div>
  );
}
