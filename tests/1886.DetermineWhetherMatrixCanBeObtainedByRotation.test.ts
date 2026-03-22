import { describe, test, expect } from 'vitest';
import { findRotation } from '../src/1886.DetermineWhetherMatrixCanBeObtainedByRotation';

describe('convert', () => {
    test('deve retornar true para mat = [[0,1],[1,0]], target = [[1,0],[0,1]]', () => {
        const result = findRotation([[0, 1], [1, 0]], [[1, 0], [0, 1]]);
        expect(result).toBe(true);
    });

    test('deve retornar true para mat = [[0,0,0],[0,1,0],[1,1,1]], target = [[1,1,1],[0,1,0],[0,0,0]]', () => {
        const result = findRotation([[0, 0, 0], [0, 1, 0], [1, 1, 1]], [[1, 1, 1], [0, 1, 0], [0, 0, 0]]);
        expect(result).toBe(true);
    });

    test('deve retornar false para mat = [[0,1],[1,1]], target = [[1,0],[0,1]]', () => {
        const result = findRotation([[0, 1], [1, 1]], [[1, 0], [0, 1]]);
        expect(result).toBe(false);
    });
});