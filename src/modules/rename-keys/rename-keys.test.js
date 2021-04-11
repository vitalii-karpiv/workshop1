const rename_keys = require('./rename-keys');

describe('rename_keys()', () => {
    test("recursively renames keys and returns a new modified object", () => {
        expect(rename_keys({ 'a': { 'b': { 'c': 5 } } }, { c: 'b' })).toEqual({ 'a': { 'b': { 'b': 5 } } });
    });
    test("recursively renames keys and returns a new modified object", () => {
        expect(rename_keys({ 'a': { 'b': { 'c': 5 }, c: { d: 6 } } }, { c: 'b' })).toEqual({ 'a': { 'b': { 'd': 6 } } });
    });
})