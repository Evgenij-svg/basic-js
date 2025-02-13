const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */

const chainMaker = {
    chain: [],
  
    getLength() {
      return this.chain.length;
    },
    
    addLink(value) {
      this.chain.push(`( ${value} )`);
      return this;
    },
    
    removeLink(position) {
      if (!Number.isInteger(position) || position <= 0 || position > this.chain.length) {
        throw new Error("You can't remove incorrect link!");
      }
      this.chain.splice(position - 1, 1);
      return this;
    },
    
    reverseChain() {
      this.chain.reverse();
      return this;
    },
    
    finishChain() {
      const result = this.chain.join("~~");
      this.chain = [];
      return result;
    }
};

module.exports = {
    chainMaker,
};
console.log(
    chainMaker
        .addLink(function () {})
        .addLink('2nd')
        .addLink('3rd')
        .removeLink(2)
        .reverseChain()
        .finishChain()
);
//'( 3rd )~~( function () { } )'
// ( 3rd )~~( function () { } )
