const f5 = require('./f5');

describe('f5()', () => {
    test("Sets the value at path of object { 'a': { 'b': { 'c': 3 } } }, path 'a.b.c'", () => {
        expect(f5({ 'a': { 'b': { 'c': 3 } } }, 'a.b.c', 10)).toEqual({ a: { b: { c: 10 } } });
    });
})