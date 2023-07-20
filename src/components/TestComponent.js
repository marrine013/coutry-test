/* import { useState } from 'react';

import WordList from './WordList';
import styles from './TestComponent.module.css';

const data = {
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

  while (keys.length > 1) {
    const maxLength = Math.max(...keys.map(key => data[key].length));
    const longestKeys = keys.filter(key => data[key].length === maxLength);
    const randIndex1 = Math.floor(Math.random() * longestKeys.length);
    const firstKey = longestKeys[randIndex1];
    const firstWord = getRandomWord(data[firstKey]);

    longestKeys.splice(randIndex1, 1);

    const randIndex2 = Math.floor(Math.random() * longestKeys.length);
    const secondKey = longestKeys[randIndex2];
    const secondWord = getRandomWord(data[secondKey]);

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

  return pairs;
}

const TestComponent = () => {
  const [pairs, setPairs] = useState(generateWordPairs(data));
  const [chosenWords, setChosenWords] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);

  const handleWordChosen = (index, word) => {
    setChosenWords({
      ...chosenWords,
      [index]: word
    });

    if (Object.keys(chosenWords).length === 39) {
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
    console.log(newData);
    setPairs(generateWordPairs(newData));
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <WordList pairs={pairs} onChosen={handleWordChosen} />
      <button className={styles.btn} disabled={isDisabled}>
        Далее
      </button>
    </form>
  );
};

export default TestComponent;
 */

import React, { useState, useEffect } from 'react';

import WordList from './WordList';
import styles from './TestComponent.module.css';

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

// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }

function generateWordPairs(data) {
  // console.log(`data: ${JSON.stringify(data)}`);

  const pairs = [];
  let keys = Object.keys(data);

  while (keys.length > 1) {
    let maxLength = Math.max(...keys.map(key => data[key].length));
    console.log(`maxLength ${maxLength}`); ////////////////////////////
    let longestKeys = keys.filter(key => data[key].length === maxLength);

    while (longestKeys.length === 1) {
      let newMaxLength = maxLength - 1;
      console.log(`new maxLength ${newMaxLength}`); ////////////////////////////
      longestKeys = keys.filter(key => data[key].length >= newMaxLength);
    }
    console.log(`longestKeys ${longestKeys}`); ////////////////////////////
    const randIndex1 = Math.floor(Math.random() * longestKeys.length);
    console.log(`randIndex1 ${randIndex1}`); ////////////////////////////
    const firstKey = longestKeys[randIndex1];
    console.log(`firstKey ${firstKey}`); ////////////////////////////
    const firstWord = getRandomWord(data[firstKey]);
    console.log(`firstWord ${firstWord}`); ////////////////////////////

    longestKeys.splice(randIndex1, 1);

    const randIndex2 = Math.floor(Math.random() * longestKeys.length);
    console.log(`randIndex2 ${randIndex2}`); ////////////////////////////
    const secondKey = longestKeys[randIndex2];
    console.log(`secondKey ${secondKey}`); ////////////////////////////
    const secondWord = getRandomWord(data[secondKey]);
    console.log(`secondWord ${secondWord}`); ////////////////////////////

    console.log(firstKey, firstWord, secondKey, secondWord); /////////////////////////

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

  console.log(pairs);
  return pairs;
}

/* function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
} */

const TestComponent = () => {
  const [data, setData] = useState(initialData);
  const [pairs, setPairs] = useState([]);
  const [chosenWords, setChosenWords] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const newPairs = generateWordPairs(data);
    setPairs(newPairs);
  }, [data]);

  const handleWordChosen = (index, word) => {
    setChosenWords({
      ...chosenWords,
      [index]: word
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

    // console.log(`data: ${JSON.stringify(data)}`);
    setData(newData);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <WordList pairs={pairs} onChosen={handleWordChosen} />
      <button className={styles.btn} disabled={isDisabled}>
        Далее
      </button>
    </form>
  );
};

export default TestComponent;

// все работает, НО выдает иногда в пару слова с одинаковым индексом
