import { describe, test, expect } from 'vitest';
import { lengthOfLongestSubstring } from './3.LongestSubstringWhitoutRepeatingCharacters';

describe('lengthOfLongestSubstring', () => {
    test('deve retornar 3 para s = "abcabcbb"', () => {
        const s = "abcabcbb";
        const result = lengthOfLongestSubstring(s);
        expect(result).toBe(3);
    });

    test('deve retornar 1 para s = "bbbbb"', () => {
        const s = "bbbbb";
        const result = lengthOfLongestSubstring(s);
        expect(result).toBe(1);
    });

    test('deve retornar 3 para s = "pwwkew"', () => {
        const s = "pwwkew";
        const result = lengthOfLongestSubstring(s);
        expect(result).toBe(3);
    });
});