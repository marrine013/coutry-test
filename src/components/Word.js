import { useState } from 'react';
import styles from './Word.module.css';

// const Word = props => {
//   return <span className={styles.word}>{props.word}</span>;
// };

const Word = ({ word, index /* , onClick */ }) => {
  const [isChosen, setIsChosen] = useState(false);

  const clickHandler = event => {
    console.log(
      event.target.getAttribute('data-index'),
      event.target.textContent
    );
    setIsChosen(true);
  };

  const wordClasses = isChosen
    ? `${styles.word} ${styles.chosen}`
    : styles.word;
  return (
    <span
      className={wordClasses}
      data-index={index}
      onClick={/* onClick */ clickHandler}
    >
      {word}
    </span>
  );
};

export default Word;
