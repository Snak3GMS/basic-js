const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let countDepth = 1;
    arr.forEach((element)=>{
      if (Array.isArray(element)) {
        let insideDepthCounter = this.calculateDepth(element)
        if(countDepth<++insideDepthCounter) {
          countDepth=insideDepthCounter;
        }
      }
    });
    return countDepth;
  }
};