import capitalize from "../src/capitalize.js";

test("capitalize an all lower case word", () => {
    expect(capitalize("capitalize")).toMatch(/Capitalize/);
});

test("capitalize an all upper case word", () => {
    expect(capitalize("CAPITALIZE")).toMatch(/CAPITALIZE/);
});

test("capitalize a mix of uppercase and lowercase", () => {
    expect(capitalize("cApitaliZe")).toMatch("CApitaliZe");
});

test("capitalize a string that does not start with a letter", () => {
    expect(capitalize(" capitalize")).toMatch(" capitalize");
});
// Implementation choice for simplicity: if first character of string is not a 
// letter, then don't capitalize