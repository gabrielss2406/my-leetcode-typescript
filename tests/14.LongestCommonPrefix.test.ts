import { describe, test, expect } from 'vitest';
import { longestCommonPrefix } from '../src/14.LongestCommonPrefix';

describe('longestCommonPrefix', () => {
    test('deve retornar "fl" para strs = ["flower","flow","flight"]', () => {
        const strs = ["flower", "flow", "flight"];
        const result = longestCommonPrefix(strs);
        expect(result).toBe("fl");
    });

    test('deve retornar "" para strs = ["dog","racecar","car"]', () => {
        const strs = ["dog", "racecar", "car"];
        const result = longestCommonPrefix(strs);
        expect(result).toBe("");
    });
});