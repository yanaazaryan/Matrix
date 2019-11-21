const utils = require('./utils');

let mat = [['A', 'B', 'C'],
  ['D', 'E', 'F'],
  ['G', 'H', 'I']];


let firMat = [[1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]];

let secMat = [[7, 6, 3],
  [8, 5, 2],
  [9, 4, 1]];

console.log(print(multiplyMatrices(firMat, secMat)))  ;
console.log(print(mat));