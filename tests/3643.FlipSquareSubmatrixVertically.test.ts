import { describe, test, expect } from 'vitest';
import { reverseSubmatrix } from '../src/3643.FlipSquareSubmatrixVertically';

describe('reverseSubmatrix', () => {
    test('deve retornar a matriz com a submatriz invertida para grid = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]], x = 1, y = 0, k = 3', () => {
        const result = reverseSubmatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]], 1, 0, 3);
        expect(result).toStrictEqual([[1, 2, 3, 4], [13, 14, 15, 8], [9, 10, 11, 12], [5, 6, 7, 16]]);
    });

    test('deve retornar a matriz com a submatriz invertida para grid = [[3,4,2,3],[2,3,4,2]], x = 0, y = 2, k = 2', () => {
        const result = reverseSubmatrix([[3, 4, 2, 3], [2, 3, 4, 2]], 0, 2, 2);
        expect(result).toStrictEqual([[3, 4, 4, 2], [2, 3, 2, 3]]);
    });
});