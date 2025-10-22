import analyzeArray from "../src/analyzeArray.js";

test("test min number property", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toEqual(1);
});

test("test max number property", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toEqual(8);
});

test("test length property", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toEqual(6);
});

test("test average property", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toEqual(4);
});

test("test object returning correctly", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual( {"average": 4, "min": 1, "max": 8, "length": 6});
});



