function print(mat) {

    if(mat){
      let result = "";
  
      for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat.length; j++) {
          result += mat[i][j] + '\t';
        }
        result += "\n";
      }
      return result;
    }
    return null;
  
  }
  
  module.exports = {
    print
  };