const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
      this.chain.push(`( ${value} )`);
    return chainMaker;
  },
  removeLink(position) {
    if (typeof(position) !== 'number' || position < 1 || position > this.chain.length-1) {
      this.chain = [];
      throw new Error;
    } else {
    this.chain.splice(position-1,1);
    return chainMaker;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return chainMaker;
  },
  finishChain() {
    if (!this.chain.length){

    }else {
    let result = this.chain.join('~~');
    this.chain = [];
    return result;
    }
  }
};

module.exports = chainMaker;
