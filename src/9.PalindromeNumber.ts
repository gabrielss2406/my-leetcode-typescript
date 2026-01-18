export function isPalindrome(x: number): boolean {
    const s = String(x);
    const len = s.length;

    if (x < 0) return false;

    for (let i = 0; i < len / 2; i++)
        if (s[i] != s[len - 1 - i])
            return false;

    return true;
}