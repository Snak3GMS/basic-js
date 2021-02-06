const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  if (!date) {
    return 'Unable to determine the time of year!'
  }
  if (!(date instanceof Date)) {
    throw new Error('Error');
  }
  if (!(date.getTime())) {
    throw new Error('Error')
  }
 
  let monthOfDate = date.getMonth();

  if ((monthOfDate > -1 && monthOfDate < 2) || monthOfDate == 11 ){
    return 'winter';
  } else if (monthOfDate > 1 && monthOfDate < 5) {
    return 'spring';
  } else if (monthOfDate > 4 && monthOfDate < 8) {
    return 'summer';
  } else {
    return 'fall'
  }
};