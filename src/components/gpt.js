import React, { useState } from 'react';

const Word = ({ word, onClick }) => {
  return <span onClick={onClick}>{word}</span>;
};

const WordPair = ({ firstWord, secondWord, onSelect }) => {
  const handleWordClick = word => {
    onSelect(word);
  };

  return (
    <li>
      <Word word={firstWord} onClick={() => handleWordClick(firstWord)} />
      {' - '}
      <Word word={secondWord} onClick={() => handleWordClick(secondWord)} />
    </li>
  );
};

const WordList = ({ pairs, onSelect }) => {
  return (
    <ul>
      {pairs.map((pair, index) => (
        <WordPair
          key={index}
          firstWord={pair[0]}
          secondWord={pair[1]}
          onSelect={onSelect}
        />
      ))}
    </ul>
  );
};

// function randomArrElem(arr) {
//   const randomIndex = Math.floor(Math.random() * arr.length);
//   const result = arr[randomIndex];
//   return result;
// }

function getRandomWord(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const result = arr[randomIndex];
  return result;
}

function generateWordPairs() {
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

    pairs.push([firstWord, secondWord]);

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
  const [pairs, setPairs] = useState(generateWordPairs());

  const handleWordSelect = word => {
    console.log('Selected word:', word);
    // Здесь вы можете обработать выбранное слово и выполнить необходимые действия

    // Пример обновления списка пар слов после выбора
    const newPairs = pairs.filter(pair => pair.includes(word));
    setPairs(newPairs);
  };

  return <WordList pairs={pairs} onSelect={handleWordSelect} />;
};

export default TestComponent;
