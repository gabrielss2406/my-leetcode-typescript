import { describe, test, expect } from 'vitest';
import { countSubmatrices } from '../src/3070.CountSubmatricesWithTopLeftElementAndSumLessThanK';

describe('countSubmatrices', () => {
    test('deve retornar 4 para grid = [[7,2,9],[1,5,0],[2,6,6]], k = 20', () => {
        const result = countSubmatrices([[7, 6, 3], [6, 6, 1]], 18);
        expect(result).toBe(4);
    });

    test('deve retornar 6 para grid = [[7,2,9],[1,5,0],[2,6,6]], k = 20', () => {
        const result = countSubmatrices([[7, 2, 9], [1, 5, 0], [2, 6, 6]], 20);
        expect(result).toBe(6);
    });
});