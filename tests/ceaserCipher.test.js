import ceaserCipher from "../src/ceaserCipher.js";

test("simple case from abc to cde", () => {
    expect(ceaserCipher("abc", 2)).toMatch("cde");
})

test("wrapping from z to a", () => {
    expect(ceaserCipher("xyz", 3)).toMatch("abc");
});

test("lowercase and uppercase preservation", () => {
    expect(ceaserCipher("HeLLo", 3)).toMatch("KhOOr");
});

test("non character and non number inputs", () => {
    expect(ceaserCipher("Hello, World!", 3)).toMatch("Khoor, Zruog!");
})

