import { describe, test, expect } from 'vitest';
import { plusOne } from '../src/66.PlusOne';

describe('plusOne', () => {
    test('deve retornar [1, 2, 4] para [1, 2, 3]', () => {
        const result = plusOne([1, 2, 3]);
        expect(result).toEqual([1, 2, 4]);
    });

    test('deve retornar [4, 3, 2, 2] para [4, 3, 2, 1]', () => {
        const result = plusOne([4, 3, 2, 1]);
        expect(result).toEqual([4, 3, 2, 2]);
    });

    test('deve retornar [1, 0] para [9]', () => {
        const result = plusOne([9]);
        expect(result).toEqual([1, 0]);
    });
});