import { rotateLeft, rotateRight } from "./rotateMatrix.js";
import { getMirrorMatrix } from "./getMirrorMatrix.js";
import multiply from "./multiply.js";

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
console.log(multiply(matrixA, matrixB));
