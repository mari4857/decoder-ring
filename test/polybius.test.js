const { expect } = require("chai");
const polybius = require("../src/polybius");

describe("polybius", () => {
  it("maintains spaces when encoding", () => {
    const input = "Hello world";
    const actual = polybius(input, encode = true);
    const expected = "3251131343 2543241341";
    expect(actual).to.equal(expected);
  })

  it("maintains spaces when decoding", () => {
    const input = "3251131343 2543241341";
    const actual = polybius(input, encode = false);
    const expected = "hello world";
    expect(actual).to.equal(expected);
  })

  it("returns a string when encoding", () => {
    const input = "thinkful";
    const actual = polybius(input, encode = true);
    expect(actual).to.be.a('string');
  })

  it("returns a string when decoding", () => {
    const input = "4432423352125413";
    const actual = polybius(input, encode = false);
    expect(actual).to.be.a('string');
  })

  it("returns false if number of characters in string (excluding spaces) is not even when decoding", () => {
    const input = "3251131343 25432413411";
    const actual = polybius(input, encode = false);
    const expected = false;
    expect(actual).to.equal(expected);
  })

  it("ignores capital letters", () => {
    const input = "Hello";
    const actual = polybius(input, encode = true);
    const expected = "3251131343";
    expect(actual).to.equal(expected);
  })

  it("shows the letters 'i' and 'j' when decoding", () => {
    const input = "4432423352125413";
    const actual = polybius(input, encode = false);
    const expected = "thijnkful";
    expect(actual).to.equal(expected);
  })
})