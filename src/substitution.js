// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  // substitute alphabet examples: xoyqmcgrukswaflnthdjpzibev || pcrfdeonvmlthkzwubxsaqijyg
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) {
      return false;
    }
    const letters = {};
    for (let i = 0; i < alphabet.length; i++) {
      const letter = alphabet[i];
      if (!letters[letter]) {
        letters[letter] = true;
      } else {
        return false;
      }
    }
    const from = "abcdefghijklmnopqrstuvwxyz";
    const inputLowerCase = input.toLowerCase();
    let result = "";
    for (let i = 0; i < inputLowerCase.length; i++) {
      const inputLetter = inputLowerCase[i];
      let index;
      if (encode) {
        index = from.indexOf(inputLetter)
      } else {
        index = alphabet.indexOf(inputLetter)
      }
      if (index < 0) {
        result += inputLetter;
      } else {
        if (encode) {
          result += alphabet[index];
        } else {
          result += from[index];
        }
      }
    }
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
