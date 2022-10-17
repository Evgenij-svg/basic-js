const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */

const chainMaker = {
    Chain: [],
    getLength() {
        return this.Chain.length;
    },
    addLink(value) {
        this.Chain.push(`( ${value} )`);
        return chainMaker;
    },
    removeLink(position) {
        if (position < 1) {
            return new Error(
                'throws an Error with message "You can\'t remove incorrect link!" on trying to remove wrong link'
            );
         }else if (position > this.Chain.length) {
            return new Error(
                'throws an Error with message "You can\'t remove incorrect link!" on trying to remove wrong link'
            );
        } else if (!(typeof position == 'number')) {
            return new Error(
                'throws an Error with message "You can\'t remove incorrect link!" on trying to remove wrong link'
            );
        }
        else{
            this.Chain.splice(position - 1, 1);
        }
        
        return chainMaker;
    },
    reverseChain() {
        this.Chain.reverse();
        return chainMaker;
    },
    finishChain() {
        return this.Chain.toString().replace(/,/g, '~~');
    },
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
