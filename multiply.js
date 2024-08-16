// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)
const multiply = (matrixA, matrixB) => {
  const result = [];
  for (let i = 0; i < matrixA.length; i += 1) {
    result[i] = [];
  }
  console.log (result);
  for (let j = 0; j < matrixB[0].length; j += 1) {
    for (let i = 0; i < matrixA.length; i += 1) {
      let temp = 0;
      for (let k = 0; k < matrixB.length; k += 1) {
        temp += matrixA[i][k] * matrixB[k][j];
        result[i][j] = temp;
      }
    }
  }
  return result;
};
  
export default multiply;
  // END
  