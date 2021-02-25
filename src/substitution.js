// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  // substitute alphabet examples: xoyqmcgrukswaflnthdjpzibev || pcrfdeonvmlthkzwubxsaqijyg

  function substitution(input, alphabet, encode = true) {
    if (alphabet.length !== 26) {
      return false;
    }
    let alphabetCharacters = [];
    for (let i = 0; i < alphabet.length; i++) {
      const alphabetLetter = alphabet[i];
      if (alphabet.includes(alphabetLetter)) {
        return false;
      } else {
        alphabet.push(alphabetLetter);
      }
    }
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
