import calculator from "../src/calculator.js";

test("simple addition of two numbers", () => {
    expect(calculator.add(1,2)).toBe(3);
})

test("addition of non numbers", () => {
    expect(() => calculator.add("a", 1)).toThrow();
});

test("simple subtraction of two numbers", () => {
    expect(calculator.subtract(3, 2)).toBe(1);
});

test("subtraction of non numbers", () => {
    expect(() => calculator.subtract("a", 1)).toThrow();
});

test("division of two non zero numbers", () => {
    expect(calculator.divide(4, 2)).toBe(2);
});

test("division by zero", () => {
    expect(() => calculator.divide(5, 0)).toThrow();
});

test("division by non numbers", () => {
    expect(() => calculator.divide("a", 1)).toThrow();
});


