const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
    let errorArr = new Error(
        "'arr' parameter must be an instance of the Array!"
    );
    if (!Array.isArray(arr)) {
        return errorArr;
    }
    let arrIncludes = arr;
    //  if(arrIncludes.indexOf('--discard-prev')==0||arrIncludes.indexOf('--double-prev')==0){
    //   console.log(1)
    //   transform(arrIncludes.slice(1,arrIncludes.length))
    //   //transform(arrIncludes.splice(0,1))
    //   // transform(arrIncludes.slice(1,arrIncludes.length))
    //  }
    //  if(arrIncludes.indexOf('--double-next')==arrIncludes.length-1||arrIncludes.indexOf('--discard-next')==arrIncludes.length-1){
    //   // console.log(arrIncludes.slice(0,arrIncludes.length-1))
    //    transform(arrIncludes.slice(0,arrIncludes.length-1))
    //  }

    if (arrIncludes.includes('--discard-next')) {
        if (
            arrIncludes.indexOf('--discard-next') + 2 ==
            arrIncludes.indexOf('--double-prev')
        ) {
            arrIncludes.splice(arrIncludes.indexOf('--discard-next'), 3);
        }
    }
    let array = arrIncludes.map((elem, index) => {
        if (elem == '--double-next') {
            return arrIncludes[index + 1];
        }
        if (elem == '--double-prev') {
            return arrIncludes[index - 1];
        } else {
            return elem;
        }
    });
    if (array.indexOf('--discard-next') + 2 ==array.indexOf('--discard-prev')) {
        array.splice(array.indexOf('--discard-next'), 3);

    } else if (array.includes('--discard-next')) {

        if (array.indexOf('--discard-next') == array.length - 1) {
            array.splice(array.indexOf('--discard-next'), 1);
        } else {
            array.splice(array.indexOf('--discard-next'), 2);
        }

    } else if (array.includes('--discard-prev')) {
        if (array.indexOf('--discard-prev') == 0) {
            array.splice(0, 1);
        } else {
            array.splice(array.indexOf('--discard-prev') - 1, 2);
        }
    }

    if (
        array.includes('--double-prev') ||
        array.includes('--double-next') ||
        array.includes('--discard-prev') ||
        array.includes('--discard-next')
    ) {
        transform(array);
    }
    array = array.filter(function (element) {
        return element !== undefined;
    });
    console.log(array);
    return array;

    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
}

module.exports = {
    transform,
};
transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]);
