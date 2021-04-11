const f2 = require('./f2');

describe('f2', () => {
    test('Find difference of two arrays 2, 1, 3], [2, 3, 4]', () => {
        expect(f2([2, 1, 3], [2, 3, 4])).toStrictEqual([1]);
    });
    test('Find difference of two arrays [2, 1, 3], [2, 1, 3', () => {
        expect(f2([2, 1, 3], [2, 1, 3])).toStrictEqual([]);
    });
})