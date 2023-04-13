const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let ArrayNumber=(n+'').split('')
  let MaxNumber=0;
  ArrayNumber.forEach((elem,indx)=>{
    const BuferArray=[...ArrayNumber];
    BuferArray.splice(indx,1)
    const str = BuferArray.join("");
    const num = parseInt(str);
    if(num>MaxNumber){
      MaxNumber=num;
    }
  })
  return MaxNumber
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};

deleteDigit(152);