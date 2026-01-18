import { describe, test, expect } from 'vitest';
import { longestPalindrome } from '../src/5.LongestPalindromicSubstring';

describe('longestPalindromicSubstring', () => {
    test('deve retornar "bab" para s = "babad"', () => {
        const result = longestPalindrome("babad");
        expect(result).toBe("bab");
    });

    test('deve retornar "bb" para s = "cbbd"', () => {
        const result = longestPalindrome("cbbd");
        expect(result).toBe("bb");
    });
});