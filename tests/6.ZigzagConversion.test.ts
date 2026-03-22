import { describe, test, expect } from 'vitest';
import { convert } from '../src/6.ZigzagConversion';

describe('convert', () => {
    test('deve retornar "PAHNAPLSIIGYIR" para s = "PAYPALISHIRING", numRows = 3', () => {
        const result = convert("PAYPALISHIRING", 3);
        expect(result).toBe("PAHNAPLSIIGYIR");
    });

    test('deve retornar "PINALSIGYAHRPI" para s = "PAYPALISHIRING", numRows = 4', () => {
        const result = convert("PAYPALISHIRING", 4);
        expect(result).toBe("PINALSIGYAHRPI");
    });

    test('deve retornar "A" para s = "A", numRows = 1', () => {
        const result = convert("A", 1);
        expect(result).toBe("A");
    });
});