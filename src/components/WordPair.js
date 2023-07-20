import Word from './Word';
import styles from './WordPair.module.css';

const WordPair = ({
  firstIndex,
  firstWord,
  secondIndex,
  secondWord,
  name,
  onSelect
}) => {
  const handleWordClick = event => {
    onSelect(name, event.target.value);
  };

  return (
    <li className={styles['word-pair']}>
      <Word
        word={firstWord}
        index={firstIndex}
        name={name}
        id={`${name}-1`}
        // onClick={() => handleWordClick(firstWord)}
        onClick={handleWordClick}
      />
      {' - '}
      <Word
        word={secondWord}
        index={secondIndex}
        name={name}
        id={`${name}-2`}
        // onClick={() => handleWordClick(secondWord)}
        onClick={handleWordClick}
      />
    </li>
  );
};

export default WordPair;
