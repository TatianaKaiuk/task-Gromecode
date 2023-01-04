import getSum, {
  getSquaredNumbers,
  getOddNumbers,
} from './calculator-unit-test.js';

it('shoud get square numbers', () => {
  const result = getSquaredNumbers([1, 2, 3]);
  expect(result).toEqual([1, 4, 9]); 
});

it('shoud get odd for numbers', () => {
  const result = getOddNumbers([1, 2, 3, 4]);
  expect(result).toEqual([2, 4]);
});
it('get sum numbers', () => {
  const result = getSum([1, 2]);
  expect(result).toEqual(3);
});
