const f3 = require('./f3');

describe('f3()', () => {
    test('Find intersection of two arrays [2, 1, 3], [2, 3, 4]', () => {
        expect(f3([2, 1, 3], [2, 3, 4])).toStrictEqual([2, 3]);
    });
    test('Find intersection of two arrays [2, 1, 3], [4, 6, 5]', () => {
        expect(f3([2, 1, 3], [4, 6, 5])).toStrictEqual([]);
    });
})