const utils = require('./utils'); 

let firMat = [[1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]];

let secMat = [[7, 6, 3],
  [8, 5, 2],
  [9, 4, 1]];

console.log(utils.multiplyMatrices(firMat, secMat));