export function longestCommonPrefix(strs: string[]): string {
    const str1 = strs[0]
    let prefix = ""
    let i = 0

    if (strs.length === 0) return "";

    while (i < str1.length) {
        for (let f = 0; f < strs.length; f++) {
            if (str1[i] === strs[f][i]) continue
            else return prefix
        }
        prefix += str1[i]
        i++
    }

    return prefix
};