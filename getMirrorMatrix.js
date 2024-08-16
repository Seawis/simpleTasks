/*
еализуйте и экспортируйте по умолчанию функцию, которая принимает двумерный массив (матрицу) и возвращает новый массив, основанный на переданном и измененный таким образом, что правая половина матрицы становится зеркальной копией левой половины, симметричной относительно вертикальной оси матрицы. Для простоты условимся, что матрица всегда имеет чётное количество столбцов и количество столбцов всегда равно количеству строк.
*/

// BEGIN
const getMirrorMatrix = (matrix) => {
  const rowsCount = matrix.length; //число рядов
  const columnsCount = matrix[0].length; //число столбцов
  const rotated = []; // []

  for (let row = 0; row < rowsCount; row += 1) {
    rotated[row] = []; // [[]]
    for (let column = 0; column < columnsCount; column += 1) {
      rotated[row][column] =
        column < columnsCount / 2
          ? matrix[row][column]
          : matrix[row][columnsCount - 1 - column];
    }
  }

  return rotated;
};

export { getMirrorMatrix };
// END
