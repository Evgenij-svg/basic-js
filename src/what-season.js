const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */

function getSeason(date) {
    let error = new Error(`Invalid date!`);
    if (date == undefined) {
        return 'Unable to determine the time of year!';
    }
    if (!(date instanceof Date)) {
        return error;
    }
    if (Object.values(date).length > 0) {
        return error;
    }

    let seasons;
    if (date.getMonth() < 2) {
        seasons = 'winter';
    } else if (date.getMonth() < 5) {
        seasons = 'spring';
    } else if (date.getMonth() < 8) {
        seasons = 'summer';
    } else if (date.getMonth() < 11) {
        seasons = 'fall';
    } else if (date.getMonth() == 11) {
        seasons = 'winter';
    }

    return seasons;

    // remove line with error and write your code here
}
module.exports = {
    getSeason,
};

