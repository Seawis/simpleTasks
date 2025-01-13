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
  
  export { fromPairs, bqs, cloneDeep, scrabble };
  