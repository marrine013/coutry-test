import WordPair from './WordPair';
import styles from './WorldList.module.css';

// const WordList = props => {
//   printWordPairs(props.list);
//   return (
//     <ul className={styles['word-list']}>
//       <WordPair word1={props.list.a[0]} word2={props.list.a[1]} />
//       <WordPair word1={props.list.d[0]} word2={props.list.d[1]} />
//       <WordPair word1={props.list.e[0]} word2={props.list.e[1]} />
//     </ul>
//   );
// };

const WordList = ({ pairs /* , onSelect  */ }) => {
  return (
    <ul className={styles['word-list']}>
      {pairs.map((pair, index) => (
        <WordPair
          key={index}
          // name={index}
          firstIndex={pair[0]}
          firstWord={pair[1]}
          secondIndex={pair[2]}
          secondWord={pair[3]}
          // onSelect={onSelect}
        />
      ))}
    </ul>
  );
};

export default WordList;
