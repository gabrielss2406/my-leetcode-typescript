export function lengthOfLongestSubstring(s: string): number {
    const charIndex = new Map<string, number>();
    let start = 0;
    let maxLen = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        const prevIndex = charIndex.get(char);

        if (prevIndex !== undefined && prevIndex >= start) {
            start = prevIndex + 1;
        }

        charIndex.set(char, i);
        const currentLen = i - start + 1;
        if (currentLen > maxLen) maxLen = currentLen;
    }

    return maxLen;
}