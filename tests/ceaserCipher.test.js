import ceaserCipher from "../src/ceaserCipher.js";

test("simple case from abc to cde", () => {
    expect(ceaserCipher("abc", 2)).toMatch("cde");
})

test("wrapping from z to a", () => {
    expect(ceaserCipher("xyz", 3)).toMatch("abc");
});

