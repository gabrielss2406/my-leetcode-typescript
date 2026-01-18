import { describe, test, expect } from 'vitest';
import { isValid } from '../src/20.ValidParentheses';

describe('longestCommonPrefix', () => {
    test('deve retornar true para s = "()', () => {
        const result = isValid("()");
        expect(result).toBe(true);
    });

    test('deve retornar true para s = "()[]{}"', () => {
        const result = isValid("()[]{}");
        expect(result).toBe(true);
    });

    test('deve retornar true para s = "(]"', () => {
        const result = isValid("(]");
        expect(result).toBe(false);
    });

    test('deve retornar true para s = "([])', () => {
        const result = isValid("([])");
        expect(result).toBe(true);
    });

    test('deve retornar true para s = "([)]', () => {
        const result = isValid("([)]");
        expect(result).toBe(false);
    });
});