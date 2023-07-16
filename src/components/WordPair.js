import { useState } from 'react';

import Word from './Word';
import styles from './WordPair.module.css';

// const WordPair = props => {
//   return (
//     <li className={styles['word-pair']}>
//       <Word word={props.word1} /> - <Word word={props.word2} />
//     </li>
//   );
// };

const WordPair = ({
  firstIndex,
  firstWord,
  secondIndex,
  secondWord /* ,
  name */
  // onSelect
}) => {
  // const [isChosen, setIsChosen] = useState(false);

  // const handleWordClick = event => {
  //   // onSelect(word);
  //   console.log(
  //     event.target.getAttribute('data-index'),
  //     event.target.textContent
  //   );
  // };

  // console.log(name);
  return (
    <li className={styles['word-pair']}>
      <Word
        word={firstWord}
        index={firstIndex}

        // onClick={() => handleWordClick(firstWord)}
        // onClick={handleWordClick}
      />
      {' - '}
      <Word
        word={secondWord}
        index={secondIndex}

        // onClick={() => handleWordClick(secondWord)}
        // onClick={handleWordClick}
      />
    </li>
  );
};

export default WordPair;
