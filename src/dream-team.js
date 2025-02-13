const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let str='';
  if(!Array.isArray(members)){
    return false;
  }
    let TopName = members
        .map((elem) => {
            // console.log(elem.trimStart())
            if (typeof elem === 'string') {
                return elem.trimStart().slice(0, 1).toUpperCase();
            } else {
                return;
            }
        })
        .sort();
    if (TopName.includes(undefined)) {
        TopName = TopName.slice(0, TopName.indexOf(undefined));
    }
    TopName.forEach(elem=>{
      str=str+elem;
    })
    return(str)
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
}
// createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]);
module.exports = {
    createDreamTeam,
};
