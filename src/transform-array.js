const { NotImplementedError } = require("../extensions/index.js");

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
const copyArray = (arr) => {
  return [...arr];
};
const isArray = (arr) => {
    return Array.isArray(arr);
  };
function transform(arr) {
  if (!isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  // Копируем исходный массив
  const transformedArray = copyArray(arr);

  // Проходим по каждому элементу массива
  for (let i = 0; i < transformedArray.length; i++) {
    // Проверяем наличие управляющих последовательностей и применяем их к массиву
    switch (transformedArray[i]) {
      case "--discard-next":
        if (i < transformedArray.length - 1) {
          transformedArray.splice(i + 1, 1);
        }
        break;
      case "--discard-prev":
        if (i > 0) {
          transformedArray.splice(i - 1, 1);
          i--;
        }
        break;
      case "--double-next":
        if (i < transformedArray.length - 1) {
          transformedArray.splice(i + 1, 0, transformedArray[i + 1]);
          i++;
        }
        break;
      case "--double-prev":
        if (i > 0) {
          transformedArray.splice(i - 1, 0, transformedArray[i - 1]);
          i++;
        }
        break;
    }
  }

  // Удаляем управляющие последовательности из преобразованного массива
  return transformedArray.filter(
    (item) =>
      item !== "--discard-next" &&
      item !== "--discard-prev" &&
      item !== "--double-next" &&
      item !== "--double-prev"
  );

  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  transform,
};
transform([1, 2, 3, "--discard-next", 1337, "--discard-prev", 4, 5]);
