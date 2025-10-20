import capitalize from "../src/capitalize.js";

test("capitalize an all lower case word", () => {
    expect(capitalize("capitalize")).toMatch(/Capitalize/);
});