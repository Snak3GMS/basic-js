const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(boolean) {
    if (boolean || boolean === undefined) {
      this.mod = 'direct';
    } else {
      this.mod = 'reverse';
    }

  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) {throw new Error('Enter message and key')}
    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let keyArr = key,
        messArr;
    while (keyArr.length < message.length) {
      keyArr += key;
    }
    messArr = message.toUpperCase().split('');
    keyArr = keyArr.toUpperCase().split('');

    messArr.forEach((element, index)=>{
      if (!alphabet.includes(element)) {
        keyArr.splice(index,0,element)
      }
    });

    messArr.forEach((elem,index)=>{
      if (alphabet.includes(elem)) {
        let countCrypt = (alphabet.indexOf(elem)+alphabet.indexOf(keyArr[index])) % 26;
        messArr.splice(index,1,alphabet[countCrypt])
      }
    })

    if (this.mod == 'direct') {
      return messArr.join('');
    } else {
      return messArr.reverse().join('');
    }
    

  }    
  decrypt(message, key) {
    if (message === undefined || key === undefined) {throw new Error('Enter message and key')}
    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let keyArr = key,
        messArr;
    while (keyArr.length < message.length) {
      keyArr += key;
    }

    messArr = message.toUpperCase().split('');
    keyArr = keyArr.toUpperCase().split('');

    messArr.forEach((element, index)=>{
      if (!alphabet.includes(element)) {
        keyArr.splice(index,0,element)
      }
    });

    messArr.forEach((elem,index)=>{
      if (alphabet.includes(elem)) {
        let countCrypt = (alphabet.indexOf(elem)-alphabet.indexOf(keyArr[index])+26) % 26;
        messArr.splice(index,1,alphabet[countCrypt])
      }
    })

    if (this.mod == 'direct') {
      return messArr.join('');
    } else {
      return messArr.reverse().join('');
    }
  }
}

module.exports = VigenereCipheringMachine; 
