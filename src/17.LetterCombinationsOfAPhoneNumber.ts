const phoneMap = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz"
};

export function letterCombinations(digits: string): string[] {
    const result: string[] = [];

    if (digits.length === 0) return result;

    function backtrack(index: number, current: string) {
        if (current.length === digits.length) {
            result.push(current);
            return;
        }

        const digit = digits[index];
        const letters = phoneMap[digit as unknown as keyof typeof phoneMap];

        for (const letter of letters) {
            backtrack(index + 1, current + letter);
        }
    }

    backtrack(0, "");
    return result;
}