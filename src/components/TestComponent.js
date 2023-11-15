import { useState, useEffect } from 'react';

import WordList from './WordList';
import styles from './TestComponent.module.css';

const countriesList = {
  Австралія: 'NEMDISCA',
  Австрія: 'ENDCSMIA',
  Азербайджан: 'CAIDNSEM',
  Аргентина: 'SCADNMIE',
  Вірменія: 'NACDISEM',
  Бельгія: 'EDCANIMS',
  Боснія: 'ANCESDIM',
  Болгарія: 'NACSDEIM',
  Бразилія: 'NAIDESCM',
  Великобританія: 'CESNDAIM',
  Греція: 'CNASEDIM',
  Грузія: 'NCDAESIM',
  Данія: 'SENCIMDA',
  Естонія: 'IDNAESCM',
  Ізраїль: 'ADCIEMNS',
  Індія: 'DAICENSM',
  Ірландія: 'DEACMSNI',
  Ісландія: 'NDSEMICA',
  Іспанія: 'NCDSIAEM',
  Італія: 'CDNESAMI',
  Канада: 'ENMSDICA',
  Кіпр: 'NAICDESM',
  Китай: 'IDESACNM',
  Корея: 'IEACNDMS',
  Куба: 'SNCMADEI',
  Латвія: 'IDCANESM',
  Литва: 'ICDANSEM',
  Мальта: 'NDICESAM',
  Німеччина: 'SECIDAMN',
  'Новая Зеландія': 'NECMSIDA',
  Норвегія: 'ESDINMCA',
  Парагвай: 'NDACESIM',
  Польща: 'DICASENM',
  Португалія: 'NICSADEM',
  Сербія: 'ASNDCIEM',
  Словаччина: 'NDCASEIM',
  Словенія: 'NDCESIMA',
  США: 'IDAEMCNS',
  Туреччина: 'DACIEMNS',
  Фінляндія: 'SNEICMDA',
  Франція: 'SCENAMID',
  Чорногорія: 'NCDSEAIM',
  Чехія: 'IDESCANM',
  Хорватія: 'NDCSEAIM',
  Швейцарія: 'EDMNICSA',
  Швеція: 'SEMIDACN',
  Японія: 'IDCENMAS'
};

const initialData = {
  D: [
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
  E: [
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
  S: [
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
  N: [
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
  A: [
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
  C: [
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
  M: [
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
  I: [
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
  const pairs = [];
  let keys = Object.keys(data);

  while (keys.length > 1) {
    let maxLength = Math.max(...keys.map(key => data[key].length));
    let longestKeys = keys.filter(key => data[key].length === maxLength);

    while (longestKeys.length < 2) {
      maxLength = maxLength - 1;
      // eslint-disable-next-line
      longestKeys = keys.filter(key => data[key].length >= maxLength);
    }

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

function findDuplicateIndexes(sortedArray) {
  const duplicateIndexes = {};
  let prevValue = null;
  let prevIndex = null;

  for (let i = 0; i < sortedArray.length; i++) {
    const currentValue = sortedArray[i];

    if (prevValue === null) {
      prevValue = currentValue;
      prevIndex = i;
      continue;
    }

    if (currentValue === prevValue) {
      if (!duplicateIndexes[currentValue]) {
        duplicateIndexes[currentValue] = [prevIndex];
      }
      duplicateIndexes[currentValue].push(i);
    } else {
      prevValue = currentValue;
      prevIndex = i;
    }
  }

  console.log(duplicateIndexes);
  return duplicateIndexes;
}

function setWeightIndexes(indexes, sortedArray) {
  const duplicateIndexes = findDuplicateIndexes(sortedArray);

  for (const value in duplicateIndexes) {
    const indexesToAdjust = duplicateIndexes[value];
    const sum = indexesToAdjust.reduce(
      (total, index) => total + indexes[index],
      0
    );
    const average = sum / indexesToAdjust.length;

    for (const index of indexesToAdjust) {
      indexes[index] = average;
    }
  }

  return indexes;
}

function setImportanceIndexes(originalArray) {
  return originalArray.map((value, index) => {
    if (index < 4) {
      return value; // Оставляем первые 4 элемента как есть
    } else {
      return originalArray[0] - value; // Вычисляем и возвращаем остальные 4 элемента
    }
  });
}

function calculateSimilarity(userIndex, countryIndex, importanceIndexes) {
  const positionWeights = [4, 3, 2, 1, -1, -2, -3, -4]; // Баллы для каждой позиции
  const weightIndexes = [4, 3, 2, 1, 1, 2, 3, 4]; // коєффициенты расположения - !!!!! если одинаковые баллы у букв, коэффициенты уравниваем!!!!!

  let similarity = 0;
  let temp = 0;

  for (let i = 0; i < userIndex.length; i++) {
    for (let j = 0; j < countryIndex.length; j++) {
      if (userIndex[i] === countryIndex[j]) {
        temp = i;

        // if (i === 6 || i === 7) {
        //   //// для частного случая! 1 - использовать объект duplicateIndexes чтобы выбрать эти индексы
        //   temp = 6.5;
        // }
        // 2 - сделать рефакторинг
        const positionDifference = Math.abs(temp - j);

        const positionDifferenceMax = Math.ceil(positionDifference);
        const positionDifferenceMin = Math.floor(positionDifference);

        similarity +=
          0.5 *
          (positionWeights[positionDifferenceMax] +
            positionWeights[positionDifferenceMin]) *
          importanceIndexes[i] *
          weightIndexes[i];

        break; // Найдена буква, переходим к следующей из userIndex
      }
    }

    //     console.log(`${similarity}, ${userIndex[i]}`);
  }

  return similarity;
}

function findAbsentKeys(arr) {
  const sortedIndex = ['A', 'C', 'D', 'E', 'I', 'M', 'N', 'S'];
  return sortedIndex.filter(item => !arr.includes(item));
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
  const [resultedCountries, setResultedCountries] = useState([]);

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

    console.log(chosenWords); /////////////

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
      console.log(`sortedKeys: ${sortedKeys}`);
      /////////////////////////////////////////////////////
      const sortedKeysStr = sortedKeys.join('');
      const sortedValues = Object.values(chosenKeys).sort((a, b) => {
        return b - a;
      });

      console.log(`sortedValues ${sortedValues}`); ///////////////

      const importanceIndexes = setImportanceIndexes(sortedValues);
      const indexes = [4, 3, 2, 1, 1, 2, 3, 4]; ////// to move all these somewhere
      const weightIndexes = setWeightIndexes([...indexes], sortedValues);

      console.log(`weightIndexes ${weightIndexes}`); ///////////

      const results = [];

      for (const [key, value] of Object.entries(countriesList)) {
        const similarity = calculateSimilarity(
          sortedKeysStr,
          value,
          importanceIndexes,
          weightIndexes
        );
        results.push({ key, value, similarity });
      }

      // Сортируем результаты по убыванию сходства (similarity)
      results.sort((a, b) => b.similarity - a.similarity);

      for (const result of results) {
        console.log(
          `Индекс сходства: ${result.key} ${result.value} - ${result.similarity}`
        );
      }
      //////////////////////////
      // const suitedCountries = results.slice(0, 5);
      setResultedCountries(results.slice(0, 5));
      // console.log(`RESULTS: ${screenResults}`);
      for (const result of resultedCountries) {
        console.log(
          `RESULTS: ${result.key} ${result.value} - ${result.similarity}`
        );
      }

      setUserIndex(sortedKeys);

      return;
    }

    if (pairs.length === 40) {
      for (let key in newData) {
        chosenKeys[key] = newData[key].length;
      }
      if (Object.keys(chosenKeys).length < 8) {
        let absentKeys = findAbsentKeys(Object.keys(chosenKeys));
        absentKeys.forEach(key => (chosenKeys[key] = 0));
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
      <br />
      <div>
        <h2>Страны, которые подходят вам больше всего:</h2>
        {resultedCountries.map(result => (
          <li>
            {result.key} {result.value}
          </li>
        ))}
      </div>
    </div>
  ) : (
    <form className={styles.form} onSubmit={submitHandler}>
      <h1>Тест: Какие страны вам больше всего подходят?</h1>
      <p>
        В каждой паре выберите по одному понятию (выбирайте, что вам ближе или
        важнее), затем нажмите кнопку <b>Далее</b>
      </p>
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
