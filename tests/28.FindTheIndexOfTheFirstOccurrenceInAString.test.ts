import { describe, test, expect } from 'vitest';
import { strStr } from '../src/28.FindTheIndexOfTheFirstOccurrenceInAString';

describe('strStr', () => {
    test('deve retornar 0 para haystack = "sadbutsad", needle = "sad"', () => {
        const result = strStr("sadbutsad", "sad");
        expect(result).toBe(0);
    });

    test('deve retornar -1 para haystack = "leetcode", needle = "leeto"', () => {
        const result = strStr("leetcode", "leeto");
        expect(result).toBe(-1);
    });
});