import { describe, test, expect } from 'vitest';
import { letterCombinations } from '../src/17.LetterCombinationsOfAPhoneNumber';

describe('letterCombinations', () => {
    test('deve retornar  para digits = "23"', () => {
        const result = letterCombinations("23");
        expect(result).toStrictEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]);
    });

    test('deve retornar  para digits = "2"', () => {
        const result = letterCombinations("2");
        expect(result).toStrictEqual(["a", "b", "c"]);
    });
});