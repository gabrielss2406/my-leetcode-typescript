import { describe, test, expect } from 'vitest';
import { myAtoi } from '../src/8.StringToInteger(atoi)';

describe('myAtoi', () => {
    test('deve retornar 42 para s = "42"', () => {
        const result = myAtoi("42");
        expect(result).toBe(42);
    });

    test('deve retornar -321 para s = " -042"', () => {
        const result = myAtoi(" -042");
        expect(result).toBe(-42);
    });

    test('deve retornar 1337 para s = "1337c0d3"', () => {
        const result = myAtoi("1337c0d3");
        expect(result).toBe(1337);
    });

    test('deve retornar 0 para s = "words and 987"', () => {
        const result = myAtoi("words and 987");
        expect(result).toBe(0);
    });

    test('deve retornar 0 para s = "0-1"', () => {
        const result = myAtoi("0-1");
        expect(result).toBe(0);
    });
});
