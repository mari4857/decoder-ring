// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const polybiusCypher = [
    {
      letter: "a",
      number: "11",
    },
    {
      letter: "b",
      number: "21",
    },
    {
      letter: "c",
      number: "31",
    },
    {
      letter: "d",
      number: "41",
    },
    {
      letter: "e",
      number: "51",
    },
    {
      letter: "f",
      number: "12",
    },
    {
      letter: "g",
      number: "22",
    },
    {
      letter: "h",
      number: "32",
    },
    {
      letter: "i",
      number: "42",
    },
    {
      letter: "j",
      number: "42",
    },
    {
      letter: "k",
      number: "52",
    },
    {
      letter: "l",
      number: "13",
    },
    {
      letter: "m",
      number: "23",
    },
    {
      letter: "n",
      number: "33",
    },
    {
      letter: "o",
      number: "43",
    },
    {
      letter: "p",
      number: "53",
    },
    {
      letter: "q",
      number: "14",
    },
    {
      letter: "r",
      number: "24",
    },
    {
      letter: "s",
      number: "34",
    },
    {
      letter: "t",
      number: "44",
    },
    {
      letter: "u",
      number: "54",
    },
    {
      letter: "v",
      number: "15",
    },
    {
      letter: "w",
      number: "25",
    },
    {
      letter: "x",
      number: "35",
    },
    {
      letter: "y",
      number: "45",
    },
    {
      letter: "z",
      number: "55",
    }
  ];

  function polybius(input, encode = true) {
    // if the input contains a number, decode the input, otherwise encode it
    if (/\d/.test(input)) {
      console.log("decode input");
    } else {
      const encodedInput = [];
      // loop through input
      const inputLowerCase = input.toLowerCase();
      for (let i = 0; i < inputLowerCase.length; i++) {
        // for each input letter, loop through polybiusCypher
        const inputLetter = input[i];
        polybiusCypher.forEach(obj => {
          // if input letter matches polybiusCypher obj.letter, add obj.number to an array
          if (inputLetter === obj.letter) {
            encodedInput.push(obj.number);
          } else if (inputLetter === " ") {
            encodedInput.push(inputLetter);
          }
        })
      }
      return encodedInput.join("");
    }
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
