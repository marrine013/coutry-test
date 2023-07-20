import { useState } from 'react';
import styles from './Word.module.css';

// const Word = props => {
//   return <span className={styles.word}>{props.word}</span>;
// };

const Word = ({ word, index, name, id, onClick }) => {
  // const changeHandler = event => {
  //   console.log(event.target.value);
  // };

  return (
    <span className={styles.word} data-index={index}>
      <input
        type='radio'
        name={name}
        id={id}
        value={`${index} ${word}`}
        onChange={onClick}
      />
      <label htmlFor={id}> {word}</label>
    </span>
  );
};

export default Word;
