const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {
  let str=[];
  getLength() {

  },
  addLink(value) {
    this.str.push(value);
  },
  removeLink(/* position */) {

  },
  reverseChain() {

  },
  finishChain() {
    return this.str;
  }
};

module.exports = {
  chainMaker
};
