import React from 'react';
import SingleQuestion, { Question } from './elements/SingleQuestion';
import styles from './styles.module.css';

interface Props {
  questions: Question[];
}


export default function QuestionAnswers({ questions }: Props) {
  return (
    <div>
      <div className={styles.top_container}>
        <p className={styles.heading}>Customer questions & answers </p>
        <button className={styles.have_a_question}>Have a Question?</button>
      </div>
      <div>

        {questions.map((question, index) => (
          <SingleQuestion key={index} question={question} />
        ))}
      </div>
    </div>
  );
}
