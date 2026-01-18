import { describe, test, expect } from 'vitest';
import { reverse } from '../src/7.ReserveInteger';

describe('reveseInteger', () => {
    test('deve retornar 321 para x = 123', () => {
        const result = reverse(123);
        expect(result).toBe(321);
    });

    test('deve retornar -321 para x = -123', () => {
        const result = reverse(-123);
        expect(result).toBe(-321);
    });

    test('deve retornar 21 para x = 120', () => {
        const result = reverse(120);
        expect(result).toBe(21);
    });
});