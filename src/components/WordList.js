import WordPair from './WordPair';
import styles from './WorldList.module.css';

const WordList = ({ pairs, onChosen, checkedRadio, setCheckedRadio }) => {
  const onSelect = (index, word, id) => {
    onChosen(index, word, id);
  };

  return (
    <ul className={styles['word-list']}>
      {pairs.map((pair, index) => (
        <WordPair
          key={index}
          name={index}
          firstIndex={pair[0]}
          firstWord={pair[1]}
          secondIndex={pair[2]}
          secondWord={pair[3]}
          onSelect={onSelect}
          checkedRadio={checkedRadio}
          setCheckedRadio={setCheckedRadio}
        />
      ))}
    </ul>
  );
};

export default WordList;
