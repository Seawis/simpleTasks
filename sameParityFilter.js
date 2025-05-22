/*Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив и возвращает новый, состоящий из элементов, у которых такая же чётность, как и у первого элемента входного массива.*/

import _ from "lodash";

/*const sameParity = (matrix) => {
  const result = [];
  let value = Math.abs(matrix[0] % 2);
  for (let item of matrix) {
    if (Math.abs(item % 2) === value) {
      result.push(item);
    }
  }
  return result;
};*/
const sameParity = (matrix) => matrix.filter((i) => Math.abs(i % 2) === Math.abs(matrix[0] % 2));

/*Реализуйте и экспортируйте по умолчанию функцию, которая принимает список пользователей и возвращает объект, где ключ - это год рождения, а значение - это количество мужчин, родившихся в этот год.*/
const getMenCountByYear = (obj) => {
  const onlyMale = obj.filter((item) => item.gender === 'male');

  const cb = (acc, item) => {
    const year = item.birthday.slice(0, 4);
    if (!Object.hasOwn(acc, year)) {
      acc[year] = 0;
    }
    acc[year] += 1;
    return acc;
  };

  return onlyMale.reduce(cb, {});
};

/*Реализуйте и экспортируйте функцию по умолчанию, которая переворачивает строку задом наперед, используя рекурсию.*/

const reverse = (str) => {
  if (str.length === 0) {
    return str;
  }
  return str[str.length - 1] + reverse(str.slice(0, -1));
};

/*Реализуйте и экспортируйте по умолчанию функцию, которая находит все анаграммы слова. Функция принимает исходное слово и список для проверки (массив), а возвращает массив всех анаграмм. Если в списке слов отсутствуют анаграммы, то возвращается пустой массив.*/

const filterAnagrams = (word, wordsList) => {
  const sortedWord = word.split('').sort().join('');
  return wordsList.filter((result) => result.split('').sort().join('') === sortedWord);
};

/* Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив чисел и искомое число. Задача функции — найти в массиве ближайшее число к искомому и вернуть его индекс в массиве.
Если в массиве содержится несколько чисел, одновременно являющихся ближайшими к искомому числу, то возвращается наименьший из индексов ближайших чисел. */

const findIndexOfNearest = (mass, num) => {
  const value = mass.map((number) => Math.abs(number - num));
  return (mass.length > 0) ? value.indexOf(Math.min(...value)) : null;
};


const nrzi = (signal) => signal
  .split('')
  .map((item, idx, arr) => {
    const value = (arr[idx - 1] === '|') ? '1' : '0';
    return (item !== '|') ? value : '';
  })
  .join('');

/* Реализуйте и экспортируйте функции ipToInt() и intToIp(), которые преобразовывают представление IP-адреса из десятичного формата с точками в 32-битное число в десятичной форме и обратно.
Функция ipToInt() принимает на вход строку и должна возвращать число. А функция intToIp() наоборот: принимает на вход число, а возвращает строку. */

function ipToInt(ip) {
  const parts = ip.split('.');
  /*
  return parts.reduce((acc, item) => {
    let i = 0;
    const newAcc = acc + parseInt(parts[i]) << (8 * (3 - i));
    i += 1;
    return newAcc >>> 0;
  }, 0);
*/
  let result = 0;

  for (let i = 0; i < parts.length; i += 1) {
    result += (parseInt(parts[i], 10) << (8 * (3 - i))); // Смещаем каждую часть
  }

  return result >>> 0; // Возвращаем беззнаковое 32-битное целое число
}

function intToIp(int) {
  // Преобразуем 32-битное число обратно в IP-адрес
  const parts = [];

  for (let i = 3; i >= 0; i -= 1) {
    parts.push((int >> (8 * i)) & 255); // Получаем каждый байт
  }

  return parts.join('.'); // Объединяем части в строку
}

/* Реализуйте и экспортируйте по умолчанию функцию, которая объединяет несколько словарей (объектов) в один общий словарь. Функция принимает любое количество аргументов и возвращает результат в виде объекта, в котором каждый ключ содержит список уникальных значений в виде массива. Элементы в списке располагаются в том порядке, в котором они появляются во входящих словарях. */

const merge = (...dict) => {
  return dict.reduce((accumulator, obj) => {
    Object.entries(obj).forEach(([key, value]) => {
        if (!accumulator[key]) {
            accumulator[key] = [];
        }
        if (!accumulator[key].includes(value)) {
            accumulator[key].push(value);
        }
    });
    return accumulator;
}, {});
};

/* Реализуйте и экспортируйте по умолчанию функцию, которая выводит на экран горизонтальную гистограмму. Функция принимает на вход количество бросков кубика и функцию, которая имитирует бросок игральной кости (её реализовывать не нужно). Вызов этой функции генерирует значение от 1 до 6, что соответствует одной из граней игральной кости.
Гистограмма содержит строки, каждой из которых соответствует грань игральной кости и количество выпадений этой грани. Результаты отображаются графически (с помощью символов #) и в виде числового значения, за исключением случаев, когда количество равно 0 (нулю). */

const histogram = (num) => {
  const rollDie = () => Math.floor((Math.random() * 6) + 1);

  const obj = {};
  for (let i = 0; i < num; i+=1) {
    const verge = rollDie();
    obj[verge] = (obj[verge] ?? 0) + 1;
  }
  //console.log(obj);
  const sym = '#';
  const numberOfVerges = 6;

  for (let i = 1; i <= numberOfVerges; i+=1) {
    Object.hasOwn(obj, i) ?
    console.log(i + '|' + sym.repeat(obj[i]) + ' ' + obj[i]) :
    console.log(i + '|');
  }
};

function isValidIPv6(ip) {
  // Проверка на полное соответствие формату IPv6
  const ipv6Pattern = /^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|(?:[0-9a-fA-F]{1,4}:){1,7}:|(?:[0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|(?:[0-9a-fA-F]{1,4}:){1,5}(?::[0-9a-fA-F]{1,4}){1,2}|(?:[0-9a-fA-F]{1,4}:){1,4}(?::[0-9a-fA-F]{1,4}){1,3}|(?:[0-9a-fA-F]{1,4}:){1,3}(?::[0-9a-fA-F]{1,4}){1,4}|(?:[0-9a-fA-F]{1,4}:){1,2}(?::[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:(?::[0-9a-fA-F]{1,4}){1,6}|:(?::[0-9a-fA-F]{1,4}){1,7}|(?:[0-9a-fA-F]{1,4}:){0,6}:{1,2}$/;
  return ipv6Pattern.test(ip);
};

/*Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход поле боя в виде квадратного двумерного массива из нулей и единиц. Ноль — пустая ячейка, единица — часть корабля. Функция должна вернуть количество кораблей на поле боя.
В отличие от классической игры "Морской бой", в данном варианте корабли могут изгибаться буквой "г" и "змейкой".*/

const calcShipsCount = (battlefield) => {
  const rows = battlefield.length;
  const cols = battlefield[0]?.length || 0;
  let shipCount = 0;

  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
// Функция для обхода корабля с помощью глубинного поиска
  function dfs(r, c) {
    if (r < 0 || r >= rows || c < 0 || c >= cols || visited[r][c] || battlefield[r][c] === 0) {
      return;
    }
    // Отмечаем текущую ячейку как посещенную
    visited[r][c] = true;
    // Проверяем все соседние клетки (вверх, вниз, влево, вправо)
    dfs(r - 1, c); // вверх
    dfs(r + 1, c); // вниз
    dfs(r, c - 1); // влево
    dfs(r, c + 1); // вправо
  }
  // Проходим по всем клеткам поля боя
  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      if (battlefield[i][j] === 1 && !visited[i][j]) {
        // При обнаружении нового корабля увеличиваем счетчик
        shipCount += 1;
        // Ищем все части этого корабля
        dfs(i, j);
      }
    }
  }
  return shipCount;
};

/* Реализуйте и экспортируйте по умолчанию функцию, которая выводит на экран столбчатую диаграмму. Функция принимает в качестве параметра последовательность чисел, длина которой равна количеству столбцов диаграммы. Размер диаграммы по вертикали должен определяться входными данными. */

const barChart = (mass) => {
  const maxValue = Math.max(...mass) < 0 ? 0 : Math.max(...mass);
  const minValue = Math.min(...mass) > 0 ? 0 : Math.min(...mass);

  const result = [];
  for (let row = 0; row < (maxValue - minValue); row += 1) {
    result[row] = [];
    for (let column = 0; column < mass.length; column += 1) {
      result[row][column] = row < (maxValue - mass[column]) && row >= maxValue
        ? '#'
        : (row >= (maxValue - mass[column]) && row < maxValue) ? '*' : ' ';
    }
  }
  result.forEach((item) => console.log(item.join('')));
};

/* Реализуйте и экспортируйте по умолчанию функцию, которая выводит на экран вертикальную гистограмму. Функция принимает на вход количество бросков кубика и функцию, которая имитирует бросок игральной кости (её реализовывать не нужно). Вызов этой функции генерирует значение от 1 до 6, что соответствует одной из граней игральной кости.
Гистограмма содержит столбцы, каждому из которых соответствует грань игральной кости и количество выпадений этой грани. Результаты отображаются графически (с помощью символов #) и в виде процентного значения от общего количества бросков, за исключением случаев, когда количество равно 0 (нулю). */

const displayHistogram = (num) => {
  const rollDie = () => Math.floor((Math.random() * 6) + 1);
  const numberOfVerges = 6;

  const obj = {};
  for (let j = 1; j <= numberOfVerges; j += 1) {
    obj[j] = 0;
  }
  for (let i = 0; i < num; i += 1) {
    const verge = rollDie();
    obj[verge] += 1;
  }
  console.log(obj);

  const sym = '### ';
  const empty = '    ';
  const maxValue = Math.max(...Object.values(obj));

  const result = [];
  for (let row = 0; row <= maxValue; row += 1) {
    result[row] = [];
    for (let column = 0; column < numberOfVerges; column += 1) {
      if (row > (maxValue - obj[column + 1])) {
        result[row][column] = sym;
      } else if (row === (maxValue - obj[column + 1]) && obj[column + 1] !== 0) {
        const percent = Math.round((100 * obj[column + 1]) / num);
        result[row][column] = (percent.toString().length > 1) ? (`${percent}% `) : (`${percent}%  `);
      } else result[row][column] = empty;
    }
  }

  result.forEach((item) => console.log(item.join('').trimEnd()));
  console.log('-'.repeat(numberOfVerges * sym.length - 1));
  let displayVerges = ' ';
  for (let i = 1; i <= numberOfVerges; i += 1) {
    displayVerges += i + empty.slice(0, -1);
  }
  console.log(displayVerges.trimEnd());
};

function calculateProbabilities(rolls) {
  const outcomes = {}; // Объект для хранения результатов
  rolls.map((item) => outcomes[item] = {});

  // Итерируемся по массиву подбрасываний, начиная со второго элемента
  for (let i = 0; i < rolls.length - 1; i += 1) {
    const current = rolls[i];
    const next = rolls[i + 1];

    // Если следующее значение ещё не встречалось для текущего
    if (!outcomes[current][next]) {
      outcomes[current][next] = 0; // Инициализируем количество выпадений
    }

    // Увеличиваем счётчик для следующего числа
    outcomes[current][next] += 1;
  }

  // Переводим счетчики в вероятности
  Object.keys(outcomes).forEach((current) => {
    const total = Object.values(outcomes[current]).reduce((sum, count) => sum + count, 0);
    Object.keys(outcomes[current]).forEach((next) => {
      outcomes[current][next] /= total; // Получаем вероятность
    });
  });

  return outcomes; // Возвращаем итоговый объект
}

// Экспорт функции по умолчанию
export default calculateProbabilities;

export { sameParity, getMenCountByYear, reverse, filterAnagrams, findIndexOfNearest, nrzi, ipToInt, intToIp, merge, histogram, calcShipsCount, barChart, displayHistogram, calculateProbabilities };