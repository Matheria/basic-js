const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let totalSum = 0;
  let bannedColumns = new Set();

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (bannedColumns.has(col)) {
        continue;
      }

      if (matrix[row][col] === 0) {
        bannedColumns.add(col);
      } else {
        totalSum += matrix[row][col];
      }
    }
  }

  return totalSum;
}

module.exports = {
  getMatrixElementsSum
};
