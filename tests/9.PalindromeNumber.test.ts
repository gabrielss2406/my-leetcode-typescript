import { describe, test, expect } from 'vitest';
import { isPalindrome } from '../src/9.PalindromeNumber';

describe('isPalindrome', () => {
    test('deve retornar true para x = 121', () => {
        const x = 121;
        const result = isPalindrome(x);
        expect(result).toBe(true);
    });

    test('deve retornar false para x = -121', () => {
        const x = -121;
        const result = isPalindrome(x);
        expect(result).toBe(false);
    });

    test('deve retornar false para x = 10', () => {
        const x = 10;
        const result = isPalindrome(x);
        expect(result).toBe(false);
    });
});