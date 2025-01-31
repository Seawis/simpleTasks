/*Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив и возвращает новый, состоящий из элементов, у которых такая же чётность, как и у первого элемента входного массива.*/

import words, { } from "lodash";

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
const sameParity = (matrix) => {
  return matrix.filter(
    (item) => Math.abs(item % 2) === Math.abs(matrix[0] % 2),
  );
};
/*Реализуйте и экспортируйте по умолчанию функцию, которая принимает список пользователей и возвращает объект, где ключ - это год рождения, а значение - это количество мужчин, родившихся в этот год.*/
const getMenCountByYear = (obj) => {
  const onlyMale = obj.filter((item) => item.gender === "male");
  for (let item of onlyMale) {
    item.birthday = item.birthday.slice(0, 4);
  }

  const cb = (acc, item) => {
    if (!Object.hasOwn(acc, item.birthday)) {
      acc[item.birthday] = 0;
    }
    acc[item.birthday] += 1;
    return acc;
  };

  return onlyMale.reduce(cb, {});
};

/*Реализуйте и экспортируйте функцию по умолчанию, которая переворачивает строку задом наперед, используя рекурсию.*/

const reverse = (str) => {
  if (str.length === 0) {
    return str;
  }
  return str[str.length - 1] + reverse(str.slice(0, -1))
};

/*Реализуйте и экспортируйте по умолчанию функцию, которая находит все анаграммы слова. Функция принимает исходное слово и список для проверки (массив), а возвращает массив всех анаграмм. Если в списке слов отсутствуют анаграммы, то возвращается пустой массив.*/

const filterAnagrams = (words, arr) => {
  const result = [];
  for (let item of arr) {
    
  }
};

/* Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив чисел и искомое число. Задача функции — найти в массиве ближайшее число к искомому и вернуть его индекс в массиве.
Если в массиве содержится несколько чисел, одновременно являющихся ближайшими к искомому числу, то возвращается наименьший из индексов ближайших чисел. */

const findIndexOfNearest = (mass, num) => {
  const value = mass.map((number) => Math.abs(number - num));
  return value.indexOf(Math.min(...value));
};


const nrzi = (signal) => {
  const arr = signal.split('').filter(item => item !== '|');
  return arr.map((item) => item === '_' ? '0' : '1').join('');
};

/* Реализуйте и экспортируйте функции ipToInt() и intToIp(), которые преобразовывают представление IP-адреса из десятичного формата с точками в 32-битное число в десятичной форме и обратно.
Функция ipToInt() принимает на вход строку и должна возвращать число. А функция intToIp() наоборот: принимает на вход число, а возвращает строку. */

function ipToInt(ip) {
  const parts = ip.split('.');
  /*
  return parts.reduce((acc, item) => {
    let i = 0;
    const newAcc = acc + parseInt(parts[i]) << (8 * (3 - i));
    i++;
    console.log(i, acc);
    return newAcc >>> 0;
  }, 0);
*/
  let result = 0;

  for (let i = 0; i < parts.length; i++) {
      result += (parseInt(parts[i]) << (8 * (3 - i))); // Смещаем каждую часть
  }

  return result >>> 0; // Возвращаем беззнаковое 32-битное целое число 
}

function intToIp(int) {
  // Преобразуем 32-битное число обратно в IP-адрес
  const parts = [];

  for (let i = 3; i >= 0; i--) {
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
  const rollDie = () => Math.floor(Math.random() * 7);
  
  const cb = (acc, item) => {
    if (!Object.hasOwn(acc, item.key)) {
      acc[item.key] = 0;
    }
    acc[item.key] += 1;
    return acc;
  };

  return onlyMale.reduce(cb, {});
};


export { sameParity, getMenCountByYear, reverse, filterAnagrams, findIndexOfNearest, nrzi, ipToInt, intToIp, merge, histogram };