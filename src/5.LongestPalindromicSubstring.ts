function isValidPalindrome(s: string): boolean {
    const len = s.length;
    for (let i = 0; i < len / 2; i++)
        if (s[i] != s[len - 1 - i])
            return false;

    return true
}

export function longestPalindrome(s: string): string {
    const len = s.length;

    if (len === 1)
        return s;

    let longest = s[0];

    for (let size = len; size > 1; size--) {
        for (let i = 0; i <= len - size; i++) {
            const f = i + size - 1;

            if (s[i] === s[f]) {
                const possiblePalindrome = s.substring(i, f + 1);
                if (isValidPalindrome(possiblePalindrome))
                    return possiblePalindrome
            }
        }
    }

    return longest;
}