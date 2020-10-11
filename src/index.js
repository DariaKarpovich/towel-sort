module.exports = function towelSort (matrix) {
  if (matrix === undefined || matrix.length === 0) return [];
  let resultArr = matrix[0];

  for (let i = 1; i < matrix.length; i++) {
    i % 2 != 0 ? resultArr = resultArr.concat(matrix[i].reverse()) : resultArr = resultArr.concat(matrix[i]);
  }

  return resultArr;
}
