import Word from './Word';
import styles from './WordPair.module.css';

/* const WordPair = ({
  firstIndex,
  firstWord,
  secondIndex,
  secondWord,
  name,
  onSelect,
  checkedRadio,
  setCheckedRadio
}) => {
  // const handleWordClick = event => {
  //   console.log(
  //     name,
  //     event.target.value,
  //     // event.target.name,
  //     event.target.id,
  //     checkedRadio
  //   );
  //   onSelect(name, event.target.value, event.target.id); // клик на уже выбранное слово все обнуляет - надо разобраться
  // };

  const handleWordClick = event => {
    const id = event.target.id;

    // Проверяем, если выбранная радиокнопка уже соответствует сохраненному значению в checkedRadio,
    // тогда не обновляем состояние
    if (checkedRadio[name] !== id) {
      console.log(checkedRadio[name], id); ////////////
      onSelect(name, event.target.value, id);
    }

    console.log(name, event.target.value, id, checkedRadio);
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
        checkedRadio={checkedRadio}
        setCheckedRadio={setCheckedRadio}
      />
      {' - '}
      <Word
        word={secondWord}
        index={secondIndex}
        name={name}
        id={`${name}-2`}
        // onClick={() => handleWordClick(secondWord)}
        onClick={handleWordClick}
        checkedRadio={checkedRadio}
        setCheckedRadio={setCheckedRadio}
      />
    </li>
  );
}; */

const WordPair = ({
  firstIndex,
  firstWord,
  secondIndex,
  secondWord,
  name,
  onSelect,
  checkedRadio
  // setCheckedRadio
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
