const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
    const Index1 = [];
    const arrNotChange = arr;
    let arrChange = arr;
    arrNotChange.forEach((elem, indx) => {
        if (elem == -1) {
            Index1.push(indx);
        }
    });
    arrChange.sort(function (a, b) {
        return a - b;
    });
    arrChange = arrChange.filter(function (element) {
        return element !== -1;
    });
    Index1.forEach((elem) => {
      arrChange.splice(elem, 0, -1);
    });
    
    return(arrChange);

    // remove line with error and write your code here
}

module.exports = {
    sortByHeight,
};

