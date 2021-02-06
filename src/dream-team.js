const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  function toUpper(x) {
    return x.toUpperCase()
  };

  if(!Array.isArray(members)) {
    return false;
  }

  let nameTeam = [];
  members.forEach(element => {
    if (typeof (element) === 'string' && isNaN(element)) {
      nameTeam.push(element.trim().substring(0, 1));
    }
  });
  return nameTeam.map(toUpper).sort().join('');
};