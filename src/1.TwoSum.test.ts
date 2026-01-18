import { describe, test, expect } from 'vitest';
import { twoSum } from './1.TwoSum';

describe('twoSum', () => {
  test('deve retornar os índices [0, 1] para nums = [2, 7, 11, 15] e target = 9', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const result = twoSum(nums, target);
    expect(result.sort((a, b) => a - b)).toEqual([0, 1]);
  });

  test('deve retornar os índices [1, 2] para nums = [3, 2, 4] e target = 6', () => {
    const nums = [3, 2, 4];
    const target = 6;
    const result = twoSum(nums, target);
    expect(result.sort((a, b) => a - b)).toEqual([1, 2]);
  });

  test('deve retornar os índices [0, 1] para nums = [3, 3] e target = 6', () => {
    const nums = [3, 3];
    const target = 6;
    const result = twoSum(nums, target);
    expect(result.sort((a, b) => a - b)).toEqual([0, 1]);
  });
});