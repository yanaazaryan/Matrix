function multiplyMatrices(firMat, secMat){
    let zang1 = firMat[0];
    let zang2 = [];
    for (let i = 0; i < secMat.length; i++){
      zang2.push(secMat[i][0]);
    }
    if(zang1.length === zang2.length){
      let firMatRows = firMat.length;
      let firMatCols = firMat[0].length;
      let secMatCols = secMat[0].length;
      let ard = new Array(firMatRows);
      for (let k = 0; k < firMatRows; k++) {
        ard[k] = new Array(secMatCols); // initialize the current row
        for (let c = 0; c < secMatCols; c++) {
          ard[k][c] = 0;             // initialize the current cell
          for (let i = 0; i < firMatCols; i++) {
            ard[k][c] += firMat[k][i] * secMat[i][c];
          }
        }
      }
      return ard;
    }else{
      return 'Numbers doesnt much';
    }
  }
  
  module.exports = {
    multiplyMatrices
  };