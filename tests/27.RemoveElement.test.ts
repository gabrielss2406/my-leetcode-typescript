import { describe, test, expect } from 'vitest';
import { removeElement } from '../src/27.RemoveElement';

describe('removeElement', () => {
    test('deve retornar 2 para nums = [3,2,2,3], val = 3', () => {
        const result = removeElement([3, 2, 2, 3], 3);
        expect(result).toBe(2);
    });

    test('deve retornar 5 para nums = [0,1,2,2,3,0,4,2], val = 2', () => {
        const result = removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
        expect(result).toBe(5);
    });
});