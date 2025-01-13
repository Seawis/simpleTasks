/*Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив и возвращает новый, состоящий из элементов, у которых такая же чётность, как и у первого элемента входного массива.*/

import { words } from "lodash";

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
}

export { sameParity, getMenCountByYear, reverse, filterAnagrams };
