const f1_multipleResource = require('./f1(multiple resource)');

describe('f1_multipleResource()', () => {
    test('merging { a: 1, b: 2 }, { b: 3, c: 4 }, { a: 0, b: 4, d: 5, } return { a: 1, b: 2, c:4, d: 5 }', () => {
        expect(f1_multipleResource({ a: 1, b: 2 }, { b: 3, c: 4 }, { a: 0, b: 4, d: 5, })).toStrictEqual({ a: 1, b: 2, c: 4, d: 5 });
    });
})