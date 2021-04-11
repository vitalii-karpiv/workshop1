const f4 = require('./f4');

describe('f4()', () => {
    test('Gets the value at path of object { "a": { "b": { "c": 3 } } }, path "a.b.c"', () => {
        expect(f4({ "a": { "b": { "c": 3 } } }, 'a.b.c')).toBe(3);
    });
    test('Gets the value at path of object { "a": { "b": { "c": 3 } } }, path "a.b.c.d.e"', () => {
        expect(f4({ "a": { "b": { "c": 3 } } }, 'a.b.c.d.e')).toEqual(undefined);
    });
})