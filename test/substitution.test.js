const { expect } = require("chai");
const substitution = require("../src/substitution");

// All of the characters in the alphabet parameter must be unique. Otherwise, it should return false.

describe("substitution", () => {
  it("input can include letters and special characters", () => {
    const input = "#helloworld!";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev"
    const actual = substitution(input, alphabet, encode = true);
    const expected = "#rmwwlilhwq!";
    expect(actual).to.equal(expected);
  })

  it("input can include spaces", () => {
    const input = "hello world";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev"
    const actual = substitution(input, alphabet, encode = true);
    const expected = "rmwwl ilhwq";
    expect(actual).to.equal(expected);
  })

  it("capital letters are ignored", () => {
    const input = "HELLO";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev"
    const actual = substitution(input, alphabet, encode = true);
    const expected = "rmwwl";
    expect(actual).to.equal(expected);
  })

  it("return false if the alphabet parameter is not 26 characters", () => {
    const input = "hello";
    const alphabet = "xoyqmcgrukswaflnthdjpzibevv"
    const actual = substitution(input, alphabet, encode = true);
    const expected = false;
    expect(actual).to.equal(expected);
  })

  it("allows the alphabet parameter to include special characters", () => {
    const input = "hello";
    const alphabet = "xoyqmcgruks!aflnthdjpzibev"
    const actual = substitution(input, alphabet, encode = true);
    const expected = "rm!!l";
    expect(actual).to.equal(expected);
  })

  it("returns false if characters in the alphabet are not unique", () => {
    const input = "hello";
    const alphabet = "xxyqmcgrukswaflnthdjpzibev"
    const actual = substitution(input, alphabet, encode = true);
    const expected = false;
    expect(actual).to.equal(expected);
  })
}) 