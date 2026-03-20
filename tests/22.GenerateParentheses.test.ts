import { describe, test, expect } from 'vitest';
import { generateParenthesis } from '../src/22.GenerateParentheses';

describe('Generate Parentheses', () => {
    test('deve gerar todas combinações para n = 3', () => {
        const result = generateParenthesis(3);

        expect(result).toEqual([
            "((()))", "(()())", "(())()", "()(())", "()()()"
        ]);
    });

    test('deve gerar ["()"] para n = 1', () => {
        const result = generateParenthesis(1);

        expect(result).toEqual(["()"]);
    });
});