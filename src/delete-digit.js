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
const ArrayNumber=(n+'').split('')
const MaxNumber=0;

ArrayNumber.forEach((elem, index)=>{
  const BuferArray=ArrayNumber;
  console.log(Number((BuferArray.slice(index,ArrayNumber.length).toString().replace(/,/g, ''))))
  // if(MaxNumber<Number(BuferArray.splice(index+1,1).toString())){

  // }
})


  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};

deleteDigit(152);