const { expect } = require("chai");
const polybius = require("../src/polybius");

// spaces are maintained when encoding/decoding
describe("polybius", () => {
  it("maintains spaces when encoding", () => {
    const input = "Hello world";
    const actual = polybius(input, encode = true);
    const expected = "3251131343 2543241341";
    expect(actual).to.equal(expected);
  })
})

describe("polybius", () => {
  it("maintains spaces when decoding", () => {
    const input = "3251131343 2543241341";
    const actual = polybius(input, encode = false);
    const expected = "hello world";
    expect(actual).to.equal(expected);
  })
})

// When encoding/decoding, output should still be a string.
describe("polybius", () => {
  it("returns a string when encoding", () => {
    const input = "thinkful";
    const actual = polybius(input, encode = true);
    expect(actual).to.be.a('string');
  })
})

describe("polybius", () => {
  it("returns a string when decoding", () => {
    const input = "4432423352125413";
    const actual = polybius(input, encode = false);
    expect(actual).to.be.a('string');
  })
})

// When decoding, the number of characters in the string excluding spaces should be even. Otherwise, return false.
describe("polybius", () => {
  it("returns false if number of characters in string (excluding spaces) is not even when decoding", () => {
    const input = "3251131343 25432413411";
    const actual = polybius(input, encode = false);
    const expected = false;
    expect(actual).to.equal(expected);
  })
})

// Capital letters can be ignored.
describe("polybius", () => {
  it("ignores capital letters", () => {
    const input = "Hello";
    const actual = polybius(input, encode = true);
    const expected = "3251131343";
    expect(actual).to.equal(expected);
  })
})

// The letters "I" and "J" share a space. When encoding, both letters can be converted to 42, but when decoding, both letters should be shown
describe("polybius", () => {
  it("shows the letters 'i' and 'j' when decoding", () => {
    const input = "4432423352125413";
    const actual = polybius(input, encode = false);
    const expected = "th(i/j)nkful";
    expect(actual).to.equal(expected);
  })
})