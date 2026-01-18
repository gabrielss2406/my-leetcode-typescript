import { describe, test, expect } from 'vitest';
import { romanToInt } from '../src/13.RomanToInteger';

describe('romanToInt', () => {
    test('deve retornar 3 para s = "III"', () => {
        const s = "III";
        const result = romanToInt(s);
        expect(result).toBe(3);
    });

    test('deve retornar 58 para s = "LVIII"', () => {
        const s = "LVIII";
        const result = romanToInt(s);
        expect(result).toBe(58);
    });

    test('deve retornar 1994 para s = "MCMXCIV"', () => {
        const s = "MCMXCIV";
        const result = romanToInt(s);
        expect(result).toBe(1994);
    });
});