const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
  let lettersArray = expr.match(/.{1,10}/g);
  let buffer='',bufferResult='',str = '';
  let result = [];
    for (let i = 0; i < lettersArray.length; i++) {
      buffer = `${lettersArray[i]}`;
    //   console.log(buffer);
      if (buffer === '**********') {
          result.push(' ');
        } else {
      for (let j=0; j<lettersArray[i].length; j += 2) {
        str = buffer.slice(0,2);
        // console.log(str);
        if (str == '11') {
          bufferResult = bufferResult + '-';
        } else if (str == '10') {
          bufferResult = bufferResult + '.';
        }
        buffer = buffer.slice(2);
        }
        result.push(MORSE_TABLE[`${bufferResult}`]);

          bufferResult='';
      }
    }
    return result.join("");

}

module.exports = {
    decode
}

