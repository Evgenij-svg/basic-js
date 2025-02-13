const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
    let StrNumber = n + '';
    let sum = 0;
    StrNumber = StrNumber.split('');
    if (StrNumber.length > 1) {
        StrNumber.forEach((element) => {
            sum = Number(element) + sum;
        });
        if (sum > 9) {
            return getSumOfDigits(sum);
        } else {
            return sum;
        }
    } else {
        sum = n;

        return sum;
    }
}

module.exports = {
    getSumOfDigits,
};
