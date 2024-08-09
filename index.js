import { rotateLeft, rotateRight } from "./rotateMatrix.js";

const matrix = [
  ["00", "01", "02", "03"],
  ["10", "11", "12", "13"],
  ["20", "21", "22", "23"],
];
console.log(rotateLeft(matrix));
console.log(rotateRight(matrix));
