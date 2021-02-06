const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  const cat = '^^';
  return backyard.flat().filter(elem => {return elem == cat;}).length;
};
