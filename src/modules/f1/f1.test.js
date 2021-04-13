const f1 = require('./f1');

describe('f1()', () => {
    test('merges two simple objects', () => {
      const a = { a: 1, b: 2 };
      const b =  { b: 3, c: 4 };
      const result = f1(a, b);
      expect(result).toEqual({ a: 1, b: 2, c:4 });
    });
    test('merges correctly with first object as an empty object', () => {
      const a = {};
      const b =  { b: 3, c: 4 };
      const result = f1(a, b);
      expect(result).toEqual({ b: 3, c:4 });
    });
    test('merges correctly with second object as an empty object', () => {
      const a = { a: 1, b: 2 };
      const b =  {};
      const result = f1(a, b);
      expect(result).toEqual({ a: 1, b: 2 });
    });
    test('returns {} if both objects are empty', () => {
      const a = {};
      const b = {};
      const result = f1(a, b);
      expect(result).toEqual({});
    });
    test('merges 3 simple objects', () => {
      const a = { a: 1, b: 2 };
      const b =  { b: 3, c: 4 };
      const c =  { a: 0, b: 4, d: 5, }
      const result = f1(a, b, c);
      expect(result).toEqual({ a: 1, b: 2, c:4, d: 5 });
    });
    test('merges multiple simple objects', () => {
      const a = { a: 1, b: 2 };
      const b =  { b: 3, c: 4 };
      const c =  { a: 0, b: 4, d: 5, }
      const d =  { e: 6 }
      const e =  { e:1, f: 8 }
      const result = f1(a, b, c,d,e);
      expect(result).toEqual({ a: 1, b: 2, c:4, d: 5, e:6, f: 8 });
    });
    test('merges 2 deep objects - adds new keys', () => {
      const a = { b: 1 };
      const b =  { a: { b: 1, c: 3 } }
      const result = f1(a, b);
      expect(result).toEqual({ a: { b: 1, c: 3 }, b: 1 });
    });
    test('merges 2 deep objects - doesnt touch key if it is not object', () => {
      const a = { a: 1 };
      const b =  { a: { b: 1, c: 3 } }
      const result = f1(a, b);
      expect(result).toEqual({ a: 1 });
    });
    test('merges 2 deep objects - deeply merges objects', () => {
      const a = { a: { b: 2 } };
      const b =  { a: { b: 1, c: 3 } }
      const result = f1(a, b);
      expect(result).toEqual({ a: { b: 2, c: 3 } });
    });
    test('merges multiple deep objects - deeply merges objects', () => {
      const a = { a: { b: 2 } };
      const b =  { a: { b: 1, c: 3 } }
      const c =  { a: { a: 1,  d: { a:3 } }, b: 2 }
      const result = f1(a, b, c);
      expect(result).toEqual({ a: { a:1, b: 2, c: 3, d: { a:3 } }, b:2 });
    });
  });