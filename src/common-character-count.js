const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
    const s1Arr = s1.split('');
    const s2Arr = s2.split('');
    let sum = 0;
    while (true) {
        s1Arr.forEach((elem, indx) => {
            s2Arr.forEach((e, i) => {
                if (elem == e) {
                    sum++;
                    s1Arr.splice(indx, 1);
                    s2Arr.splice(i, 1);
                }
            });
        });
        let op = 1;
        s1Arr.forEach((elem, indx) => {
            s2Arr.forEach((e, i) => {
                if (elem == e) {
                    op--;
                }
            });
        });
        if ((op == 1)) {
            break;
        }
    }
    return sum;
}

module.exports = {
    getCommonCharacterCount,
};

