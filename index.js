import { rotateLeft, rotateRight } from "./rotateMatrix.js";
import { getMirrorMatrix } from "./getMirrorMatrix.js";
import multiply from "./multiply.js";
import takeOldest from "./takeOldest.js";
import { sameParity, getMenCountByYear, reverse, findIndexOfNearest, nrzi, ipToInt, intToIp, merge, histogram, calcShipsCount, barChart, displayHistogram, calculateProbabilities } from './sameParityFilter.js'
import { fromPairs, bqs, cloneDeep, scrabble, genDiff, findWhere, toArabic, toRoman } from './massive.js'


const matrix = [
  ["00", "01", "02", "03", "04", "05"],
  ["10", "11", "12", "13", "14", "15"],
  ["20", "21", "22", "23", "24", "25"],
  ["30", "31", "32", "33", "34", "35"],
  ["40", "41", "42", "43", "44", "45"],
];

const matrixA = [[1, 2], [3, 2]];
const matrixB = [[3, 2], [1, 1]];

// console.log(rotateLeft(matrix));
// console.log(rotateRight(matrix));
// console.log(getMirrorMatrix(matrix));
//console.log(multiply(matrixA, matrixB));

const users = [
  { name: 'Tirion', birthday: 'Nov 19, 1988' },
  { name: 'Sam', birthday: 'Nov 22, 1999' },
  { name: 'Rob', birthday: 'Jan 11, 1975' },
  { name: 'Sansa', birthday: 'Mar 20, 2001' },
  { name: 'Tisha', birthday: 'Feb 27, 1992' },
  { name: 'Chris', birthday: 'Dec 25, 1995' },
];

console.log(takeOldest(users, 2));

console.log(genDiff(
  { one: 'eon', two: 'two', four: true },
  { two: 'own', zero: 4, four: true },
));

console.log(findWhere(
  [
    { title: 'Book of Fooos', author: 'FooBar', year: 1111 },
    { title: 'Cymbeline', author: 'Shakespeare', year: 1611 },
    { title: 'The Tempest', author: 'Shakespeare', year: 1611 },
    { title: 'Book of Foos Barrrs', author: 'FooBar', year: 2222 },
    { title: 'Still foooing', author: 'FooBar', year: 3333 },
    { title: 'Happy Foo', author: 'FooBar', year: 4444 },
  ],
  { author: 'Shakespeare', year: 1611 }
));

console.log(toArabic("MCMXCIV"));
console.log(toRoman(1994));

console.log(findIndexOfNearest([7, 5, 4, 4, 3], 4));
console.log(nrzi('_|¯|____|¯|__|¯¯¯'));
console.log(ipToInt('128.32.10.1')); // 2149583361
console.log(ipToInt('255.255.255.255')); // 4294967295
console.log(merge({ a: 1, b: 2 }, { a: 3 }));
console.log(histogram(10));
console.log(calcShipsCount([
  [1, 0, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0],
  [1, 0, 0, 1, 1, 0],
  [1, 0, 1, 1, 0, 1],
  [0, 0, 0, 0, 1, 1],
  [0, 1, 0, 0, 1, 0],
]));
console.log(barChart([5, -2, 10, 6, -1, 2, 6, 4, 8, 1, 1, -7, 3, 5, 5]));
console.log(displayHistogram(13));
console.log(bqs({ per: 10, page: 1 }));
console.log(calcShipsCount([
  [0, 0, 1],
  [0, 0, 0],
  [1, 1, 0],
]));
console.log(calculateProbabilities([1, 3, 1, 5, 1]));
console.log(calculateProbabilities([1, 3, 1, 5, 1, 2, 1, 6]));