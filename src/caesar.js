// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  function caesar(input, shift, encode = true) {
    if (!shift || shift < -25 || shift > 25) {
      return false;
    }
    //loop through the input string and create an array containing each letter
    const inputLowerCase = input.toLowerCase();
    const inputArray = [];
    for (let i = 0; i < inputLowerCase.length; i++) {
      inputArray.push(inputLowerCase[i]);
    }
    // for each letter in the input array, if the alphabet array includes it: 
    // loop through the alphabet array and if the input letter matches the alphabet letter, get index of alphabet letter, 
    // add or subtract shift from index, push alphabet[shiftedIndex] to an encoded word array
    // else add the nonalphabetic symbol to the encoded word array
    let encodedWordArray = [];
    inputArray.forEach(inputLetter => {
      if (alphabet.includes(inputLetter)) {
        alphabet.forEach(alphabetLetter => {
          if (inputLetter === alphabetLetter) {
            let shiftedLetterIndex;
            encode ? shiftedLetterIndex = alphabet.indexOf(alphabetLetter) + shift : shiftedLetterIndex = alphabet.indexOf(alphabetLetter) - shift;
            if (shiftedLetterIndex >= 26) {
              shiftedLetterIndex = shiftedLetterIndex - 26;
            } else if (shiftedLetterIndex < 0) {
              shiftedLetterIndex = shiftedLetterIndex + 26;
            }
            encodedWordArray.push(alphabet[shiftedLetterIndex]);
          }
        })
      } else {
        encodedWordArray.push(inputLetter);
      }
      
    })
    // return the joined encoded word array
    return encodedWordArray.join("");
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
