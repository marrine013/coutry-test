import Word from './Word';
import styles from './WordPair.module.css';

const WordPair = ({
  firstIndex,
  firstWord,
  secondIndex,
  secondWord,
  name,
  onSelect,
  checkedRadio
}) => {
  return (
    <li className={styles['word-pair']}>
      <Word
        word={firstWord}
        index={firstIndex}
        name={name}
        id={`${name}-1`}
        onClick={onSelect}
        selectedId={checkedRadio[name]}
      />
      {' - '}
      <Word
        word={secondWord}
        index={secondIndex}
        name={name}
        id={`${name}-2`}
        onClick={onSelect}
        selectedId={checkedRadio[name]}
      />
    </li>
  );
};

export default WordPair;
