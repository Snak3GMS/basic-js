const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let hanoi = {};
  // По формуле узнаем сколько раз нужно переложить диски
  hanoi.turns = Math.pow(2, disksNumber)-1;
  // Переводим кол-во дисков в час на кол-во дисков в секунду, получаем секунды на решение
  hanoi.seconds = Math.floor(hanoi.turns / (turnsSpeed/60/60));
  return hanoi;
};