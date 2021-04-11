const f1 = require('./f1');
console.log(f1);

describe("f1()", () => {
    test('merging { a: 1, b: 2 }, { b: 3, c: 4 } return { a: 1, b: 2, c:4 }', () => {
        expect(f1({ a: 1, b: 2 }, { b: 3, c: 4 })).toEqual({ a: 1, b: 2, c: 4 });
    });
    test('merging { a: 1, b: 1 }, { a: 2, b: 2 } return { a: 1, b: 1}', () => {
        expect(f1({ a: 1, b: 1 }, { a: 2, b: 2 })).toEqual({ a: 1, b: 1});
    });
})