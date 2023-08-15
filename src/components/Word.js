import styles from './Word.module.css';

const Word = ({ word, index, name, id, onClick, selectedId }) => {
  const handleWordClick = event => {
    onClick(name, event.target.value, event.target.id);
  };

  return (
    <span className={styles.word} data-index={index}>
      <input
        type='radio'
        name={name}
        id={id}
        value={`${index} ${word}`}
        onChange={handleWordClick}
        checked={selectedId === id}
      />
      <label htmlFor={id}> {word}</label>
    </span>
  );
};

export default Word;
