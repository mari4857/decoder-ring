const { expect } = require("chai");
const caesar = require("../src/caesar");

// It returns false if the shift value is equal to 0, less than -25, greater than 25, or not present.
describe("caesar", () => {
  it("returns false if the shift value is equal to 0", () => {
    const input = "thinkful";
    const shift = 0;
    const actual = caesar(input, shift, encode = true);
    const expected = false;
    expect(actual).to.equal(expected);
  })
})

describe("caesar", () => {
  it("returns false if the shift value is less than -25", () => {
    const input = "thinkful";
    const shift = -28;
    const actual = caesar(input, shift, encode = true);
    const expected = false;
    expect(actual).to.equal(expected);
  })
})

describe("caesar", () => {
  it("returns false if the shift value is greater than 25", () => {
    const input = "thinkful";
    const shift = 28;
    const actual = caesar(input, shift, encode = true);
    const expected = false;
    expect(actual).to.equal(expected);
  })
})

describe("caesar", () => {
  it("returns false if the shift value is not present", () => {
    const input = "thinkful";
    const shift = null;
    const actual = caesar(input, shift, encode = true);
    const expected = false;
    expect(actual).to.equal(expected);
  })
})

// It encodes and decodes with positive number shifts and negative number shifts
describe("caesar", () => {
  it("encodes with positive number shifts", () => {
    const input = "thinkful";
    const shift = 3;
    const actual = caesar(input, shift, encode = true);
    const expected = "wklqnixo";
    expect(actual).to.equal(expected);
  })
})

describe("caesar", () => {
  it("encodes with negative number shifts", () => {
    const input = "thinkful";
    const shift = -3;
    const actual = caesar(input, shift, encode = true);
    const expected = "qefkhcri";
    expect(actual).to.equal(expected);
  })
})

describe("caesar", () => {
  it("decodes with positive number shifts", () => {
    const input = "wklqnixo";
    const shift = 3;
    const actual = caesar(input, shift, encode = false);
    const expected = "thinkful";
    expect(actual).to.equal(expected);
  })
})

describe("caesar", () => {
  it("decodes with negative number shifts", () => {
    const input = "qefkhcri";
    const shift = -3;
    const actual = caesar(input, shift, encode = false);
    const expected = "thinkful";
    expect(actual).to.equal(expected);
  })
})

// It ignores capital letters
describe("caesar", () => {
  it("ignores capital letters when encoding", () => {
    const input = "This is a secret message";
    const shift = 8;
    const actual = caesar(input, shift, encode = true);
    const expected = "bpqa qa i amkzmb umaaiom";
    expect(actual).to.equal(expected);
  })
})

describe("caesar", () => {
  it("ignores capital letters when decoding", () => {
    const input = "BPQA qa I amkzmb umaaiom";
    const shift = 8;
    const actual = caesar(input, shift, encode = false);
    const expected = "this is a secret message";
    expect(actual).to.equal(expected);
  })
})

// When encoding, it handles shifts that go past the end of the alphabet.
describe("caesar", () => {
  it("handles shifts that go past the end of the alphabet", () => {
    const input = "Zebra";
    const shift = 3;
    const actual = caesar(input, shift, encode = true);
    const expected = "cheud";
    expect(actual).to.equal(expected);
  })
})

// It maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding.
describe("caesar", () => {
  it("maintains spaces and other nonalphabetic symbols in the message when encoding", () => {
    const input = "secret message!";
    const shift = 8;
    const actual = caesar(input, shift, encode = true);
    const expected = "amkzmb umaaiom!";
    expect(actual).to.equal(expected);
  })
})

describe("caesar", () => {
  it("maintains spaces and other nonalphabetic symbols in the message when decoding", () => {
    const input = "amkzmb umaaiom!";
    const shift = 8;
    const actual = caesar(input, shift, encode = false);
    const expected = "secret message!";
    expect(actual).to.equal(expected);
  })
})