import { useState, useEffect } from 'react';

import WordList from './WordList';
import styles from './TestComponent.module.css';

// const chosenKeys = {};
const initialData = {
  d: [
    'величина',
    'разнообразие',
    'популярность',
    'известность',
    'коммуникабельность',
    'социальность',
    'подъём',
    'численность',
    'общество',
    'рождаемость'
  ],
  e: [
    'стабильность',
    'гордость',
    'уверенность',
    'обеспеченность',
    'работа',
    'деньги',
    'упорство',
    'рост',
    'надёжность',
    'упорядоченность'
  ],
  s: [
    'забота',
    'солидарность',
    'открытость',
    'доступность',
    'поддержка',
    'согласие',
    'помощь',
    'труд',
    'принятие',
    'единство'
  ],
  n: [
    'экологичность',
    'естественность',
    'тепло',
    'ответственность',
    'безвредность',
    'органичность',
    'чистота',
    'природа',
    'свежесть',
    'ухоженность'
  ],
  a: [
    'понятность',
    'порядок',
    'обособленность',
    'традиционность',
    'настойчивость',
    'требовательность',
    'лидерство',
    'убеждённость',
    'сила',
    'решимость'
  ],
  c: [
    'красота',
    'образованность',
    'терпеливость',
    'искусство',
    'величие',
    'цивилизованность',
    'развитие',
    'культура',
    'творчество',
    'созидание'
  ],
  m: [
    'спокойствие',
    'комфорт',
    'дружелюбие',
    'терпимость',
    'уют',
    'счастье',
    'добро',
    'нежность',
    'устойчивость',
    'умиротворение'
  ],
  i: [
    'инновационность',
    'интеллект',
    'новшество',
    'модернизация',
    'прогресс',
    'автоматизация',
    'изобретение',
    'креативность',
    'наука',
    'технология'
  ]
};

function getRandomWord(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const result = arr[randomIndex];
  return result;
}

function generateWordPairs(data) {
  // console.log(`data: ${JSON.stringify(data)}`);

  const pairs = [];
  let keys = Object.keys(data);

  //если остается только 1 массив с 2 словами - выводить из него
  while (keys.length > 1) {
    let maxLength = Math.max(...keys.map(key => data[key].length));
    // console.log(`maxLength ${maxLength}`); ////////////////////////////
    let longestKeys = keys.filter(key => data[key].length === maxLength);

    // если разница между самым длинным массивом больше 1 (например, длина самого длинного 8, длее все по 6 )
    //- получаем бесконечный цикл!
    while (longestKeys.length < 2) {
      maxLength = maxLength - 1;
      // console.log(`new maxLength ${maxLength}`); ////////////////////////////
      // eslint-disable-next-line
      longestKeys = keys.filter(key => data[key].length >= maxLength);
    }
    // console.log(`longestKeys ${longestKeys}`); ////////////////////////////
    const randIndex1 = Math.floor(Math.random() * longestKeys.length);
    // console.log(`randIndex1 ${randIndex1}`); ////////////////////////////
    const firstKey = longestKeys[randIndex1];
    // console.log(`firstKey ${firstKey}`); ////////////////////////////
    const firstWord = getRandomWord(data[firstKey]);
    // console.log(`firstWord ${firstWord}`); ////////////////////////////

    longestKeys.splice(randIndex1, 1);

    const randIndex2 = Math.floor(Math.random() * longestKeys.length);
    // console.log(`randIndex2 ${randIndex2}`); ////////////////////////////
    const secondKey = longestKeys[randIndex2];
    // console.log(`secondKey ${secondKey}`); ////////////////////////////
    const secondWord = getRandomWord(data[secondKey]);
    // console.log(`secondWord ${secondWord}`); ////////////////////////////

    // console.log(firstKey, firstWord, secondKey, secondWord); /////////////////////////

    pairs.push([firstKey, firstWord, secondKey, secondWord]);

    data[firstKey] = data[firstKey].filter(word => word !== firstWord);
    data[secondKey] = data[secondKey].filter(word => word !== secondWord);

    if (data[firstKey].length === 0) {
      delete data[firstKey];
      keys = keys.filter(key => key !== firstKey);
    }

    if (data[secondKey].length === 0) {
      delete data[secondKey];
      keys = keys.filter(key => key !== secondKey);
    }
  }

  if (keys.length === 1) {
    console.log('there will be the same letters');
    pairs.push([keys[0], data[keys[0]][0], keys[0], data[keys[0]][1]]);

    console.log(data, keys[0]);
    console.log(data[keys[0]]);
    console.log(data[keys[0]][0], data[keys[0]][1]);
  }

  console.log(pairs);
  return pairs;
}

const TestComponent = () => {
  const [data, setData] = useState(initialData);
  const [pairs, setPairs] = useState([]);
  const [chosenWords, setChosenWords] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);
  const [checkedRadio, setCheckedRadio] = useState({});
  const [isNextClicked, setIsNextClicked] = useState(false);
  const [chosenKeys, setChosenKeys] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [userIndex, setUserIndex] = useState([]);

  useEffect(() => {
    if (isNextClicked) {
      setCheckedRadio({});
      setChosenWords({});
      setIsNextClicked(false);
      setIsDisabled(true);
    }
  }, [isNextClicked, isDisabled, chosenWords, checkedRadio]);

  useEffect(() => {
    const newPairs = generateWordPairs(data);
    setPairs(newPairs);
  }, [data]);

  const handleWordChosen = (index, word, id) => {
    setChosenWords({
      ...chosenWords,
      [index]: word
    });

    setCheckedRadio({
      ...checkedRadio,
      [index]: id
    });

    if (Object.keys(chosenWords).length === pairs.length - 1) {
      setIsDisabled(false);
    }
  };

  const submitHandler = event => {
    event.preventDefault();

    const newData = {};
    for (let key in chosenWords) {
      let arr = chosenWords[key].split(' ');
      if (!(arr[0] in newData)) {
        newData[arr[0]] = [];
      }
      newData[arr[0]].push(arr[1]);
    }

    setIsNextClicked(true);
    console.log(`newData: ${JSON.stringify(newData)}`); /////////

    if (pairs.length === 5) {
      console.log('generate index');
      setShowResults(true);
      const сhosenKeysFinale = { ...chosenKeys };
      for (let key in newData) {
        сhosenKeysFinale[key] =
          (сhosenKeysFinale[key] || 0) + newData[key].length;
      }
      console.log(`chosenKeysFinale: ${JSON.stringify(сhosenKeysFinale)}`);
      setChosenKeys(сhosenKeysFinale);

      const sortedKeys = Object.keys(chosenKeys).sort((a, b) => {
        return chosenKeys[b] - chosenKeys[a];
      });

      setUserIndex(sortedKeys);

      return;
    }

    if (pairs.length === 40) {
      for (let key in newData) {
        chosenKeys[key] = newData[key].length;
      }
    } else {
      for (let key in newData) {
        chosenKeys[key] += newData[key].length;
      }
    }

    console.log(`chosenKeys: ${JSON.stringify(chosenKeys)}`);
    setData(newData);
  };

  const screenOutput = showResults ? (
    <div>
      <h2>Результаты:</h2>
      <ul>
        {Object.entries(chosenKeys).map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
      <br />
      <div>
        <b>Ваш индекс:</b> <h1>{userIndex}</h1>
      </div>
    </div>
  ) : (
    <form className={styles.form} onSubmit={submitHandler}>
      <WordList
        pairs={pairs}
        onChosen={handleWordChosen}
        checkedRadio={checkedRadio}
        setCheckedRadio={setCheckedRadio}
      />
      <button className={styles.btn} disabled={isDisabled}>
        Далее
      </button>
    </form>
  );

  return screenOutput;
};

export default TestComponent;
