/*
Реализуйте и экспортируйте функции rotateLeft() и rotateRight(), которые поворачивают матрицу влево (против часовой стрелки) и соответственно вправо (по часовой стрелке).
Матрица реализована на массивах.
Функции должны возвращать новую матрицу не изменяя исходную.
*/

// BEGIN (write your solution here)
// @ts-check

const rotateLeft = (matrix) => {
  const result = [];
  for (let j = matrix[0].length - 1; j >= 0; j -= 1) {
    const line = [];
    for (let i = 0; i < matrix.length; i += 1) {
      line.push(matrix[i][j]);
    }
    result.push(line);
  }
  return result;
};

const rotateRight = (matrix) => {
  const result = [];
  for (let j = 0; j < matrix[0].length; j += 1) {
    const line = [];
    for (let i = matrix.length - 1; i >= 0; i -= 1) {
      line.push(matrix[i][j]);
    }
    result.push(line);
  }
  return result;
};

export { rotateLeft, rotateRight };

// END
