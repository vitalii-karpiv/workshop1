const f1_deepMerge = require('./f1(deep merge)');

describe("f1_deepMerge()", () => {
    test('merging { a: { b: 2 } }, { a: { b: 1, c: 3 } } return { a: { b: 2, c: 3 }', () => {
        expect(f1_deepMerge({ a: { b: 2 } }, { a: { b: 1, c: 3 } })).toEqual({ a: { b: 2, c: 3 } });
    });
})