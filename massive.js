/*Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход массив, состоящий из массивов-пар и возвращает объект, полученный из этих пар.*/
const fromPairs = (arr) => {
    const result = {};
    for (let [key, value] of arr) {
      result[key] = value;
    }
    return result;
  };
  
  /*Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход список параметров и возвращает сформированный query string из этих параметров:*/
  const bqs = (obj) => {
    const arr = [];
    for (let [key, value] of Object.entries(obj)) {
      arr.push(`${key}=${value}`);
    }
    return arr.sort().join("&");
  };
  
  /*Реализуйте и экспортируйте по умолчанию функцию, которая выполняет глубокое копирование объектов.*/
  const cloneDeep = (obj) => {
    const result = {};
    for (let key in obj) {
      if (typeof obj[key] === "object") {
        result[key] = cloneDeep(obj[key]);
      } else {
        result[key] = obj[key];
      }
    }
    return result;
  };
  
  /*Реализуйте и экспортируйте по умолчанию функцию-предикат, которая принимает на вход два параметра: набор символов в нижнем регистре (строку) и слово, и проверяет, можно ли из переданного набора составить это слово. В результате вызова функция возвращает true или false.*/
  const scrabble = (str, word) => {
    const obj = {};
    for (let i = 0; i < str.length; i += 1) {
      if (!obj[str[i]]) {
        obj[str[i]] = 1;
      } else {
        obj[str[i]] += 1;
      }
    }
    for (let i = 0; i < word.length; i += 1) {
      if (!obj[word[i].toLowerCase()]) {
        return false;
      } else {
        obj[word[i].toLowerCase()] -= 1;
      }
    }
    return true;
  };

  /* Реализуйте и экспортируйте по умолчанию функцию, которая сравнивает два объекта и возвращает результат сравнения в виде объекта. Ключами результирующего объекта будут все ключи из двух входящих объектов, а значением строка с описанием отличий: added, deleted, changed или unchanged. */

  export default function genDiff(obj1, obj2) {
    const result = {};
    const keys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);
    keys.forEach(key => {
        if (!(key in obj1) && !(key in obj2)) {
            return;
        } else if (!(key in obj1)) {
            result[key] = 'added';
        } else if (!(key in obj2)) {
            result[key] = 'deleted';
        } else if (obj1[key] !== obj2[key]) {
            result[key] = 'changed';
        } else {
            result[key] = 'unchanged';
        }
    });
    return result;
}

/* Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив (элементы которого — это объекты) и пары ключ-значение (тоже в виде объекта), а возвращает первый элемент исходного массива, значения которого соответствуют переданным парам (всем переданным). Если совпадений не было, то функция должна вернуть null. */

const findWhere = (mass, obj) => {

  return mass.find(item => {
    return Object.entries(obj).every(([key, value]) => {
        return item[key] === value;
    });
}) || null;  
}

/* Реализуйте и экспортируйте функцию toRoman(), которая переводит арабские числа в римские. Функция принимает на вход целое число в диапазоне от 1 до 3000, а возвращает строку с римским представлением этого числа.
Реализуйте и экспортируйте функцию toArabic(), которая переводит число в римской записи в число, записанное арабскими цифрами. Если переданное римское число не корректно, то функция должна вернуть значение false. */

function toRoman(num) {
  if (num < 1 || num > 3000) {
      throw new RangeError("Input must be an integer between 1 and 3000.");
  }

  const romanNumerals = [
      { value: 1000, numeral: "M" },
      { value: 900, numeral: "CM" },
      { value: 500, numeral: "D" },
      { value: 400, numeral: "CD" },
      { value: 100, numeral: "C" },
      { value: 90, numeral: "XC" },
      { value: 50, numeral: "L" },
      { value: 40, numeral: "XL" },
      { value: 10, numeral: "X" },
      { value: 9, numeral: "IX" },
      { value: 5, numeral: "V" },
      { value: 4, numeral: "IV" },
      { value: 1, numeral: "I" }
  ];

  let result = '';

  for (const { value, numeral } of romanNumerals) {
      while (num >= value) {
          result += numeral;
          num -= value;
      }
  }

  return result;
}

function toArabic(roman) {
  const romanNumerals = {
      M: 1000,
      D: 500,
      C: 100,
      L: 50,
      X: 10,
      V: 5,
      I: 1
  };

  let total = 0;
  let prevValue = 0;

  for (let char of roman) {
      const value = romanNumerals[char];

      if (!value) {
          return false; // Если символ невалидный, возвращаем false
      }

      if (value > prevValue) {
          // Если текущее значение больше предыдущего, вычитаем двойной предыдущий
          total += value - 2 * prevValue;
      } else {
          total += value;
      }

      prevValue = value;
  }

  return total;
}

export { fromPairs, bqs, cloneDeep, scrabble, genDiff, findWhere, toRoman, toArabic }
;