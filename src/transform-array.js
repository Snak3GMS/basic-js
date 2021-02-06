const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let readyArr = [...arr];
  const discPrev = '--discard-prev',
        discNext = '--discard-next',
        doubPrev = '--double-prev',
        doubNext = '--double-next';


function discNextF() {
  if (readyArr[readyArr.indexOf(discNext)+2] === doubPrev || readyArr[readyArr.indexOf(discNext)+2] === discPrev){
    readyArr.splice(readyArr.indexOf(discNext), 3)
  } else if(readyArr.indexOf(discNext) == readyArr.length-1){
    readyArr.splice(readyArr.indexOf(discNext), 1)
  } else if (readyArr.indexOf(discNext) == -1) { 
    
  }  else {
    readyArr.splice(readyArr.indexOf(discNext), 2)
  }
}

function discPrevF() {
  if(readyArr.indexOf(discPrev) == 0) {
    readyArr.splice(readyArr.indexOf(discPrev), 1)
  } else if (readyArr.indexOf(discPrev)==-1) {

  } else{
    readyArr.splice(readyArr.indexOf(discPrev)-1, 2)
  }
}

  function doubNextF() {
  if(readyArr.indexOf(doubNext) == readyArr.length-1) {
    readyArr.splice(readyArr.indexOf(doubNext), 1)
  } else if (readyArr.indexOf(doubNext) == -1) {
    
  } else{
    readyArr[readyArr.indexOf(doubNext)] = readyArr[readyArr.indexOf(doubNext)+1]
  }
}

  function doubPrevF() {
  if (readyArr.indexOf(doubPrev) == 0) {
    readyArr.splice(readyArr.indexOf(doubPrev), 1)
  } else if (readyArr.indexOf(doubPrev) == -1) {

  } else{
    readyArr[readyArr.indexOf(doubPrev)] = readyArr[readyArr.indexOf(doubPrev)-1];
  }
}
for(let i = 0; i < arr.length; i++) {
    if (arr[i] == discNext) {
      if (arr[i+2] === doubPrev || arr[i+2] === discPrev){
        i+=3;
      }
      discNextF();
    }
    if (arr[i] == discPrev) {
      discPrevF();
    }
    if (arr[i] == doubNext) {
      doubNextF();
    }
    if (arr[i] == doubPrev) {
      doubPrevF();
    } else {
      
    }
}
  return readyArr;
}