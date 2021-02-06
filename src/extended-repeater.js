const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let repeatTimes = options.repeatTimes || 1,
      separator = options.separator || '+',
      addition,
      additionRepeatTimes = options.additionRepeatTimes || 1,
      additionSeparator = options.additionSeparator || '|';

  if (options.addition === undefined) {
    addition = '';
  } else {
    addition = options.addition + '';
  }

  let newString = str === null ? 'null' : str.toString();
  
  let additionString = `${addition}${additionSeparator}`.repeat(additionRepeatTimes).slice(0, -additionSeparator.length);
  return `${newString}${additionString}${separator}`.repeat(repeatTimes).slice(0, -separator.length)
};

