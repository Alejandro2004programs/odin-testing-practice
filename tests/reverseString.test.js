import reverseString from "../src/reverseString.js";

test("simple reverse of a string", () => {
    expect(reverseString("reverse")).toMatch("esrever");
});

test("simple reverse of a string that is the same backwards", () => {
    expect(reverseString("racecar")).toMatch("racecar");
});

