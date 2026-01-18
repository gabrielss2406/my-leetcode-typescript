const roman_to_numeric: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}

export function romanToInt(s: string): number {
    let sum = 0

    for (let i = 0; i < s.length; i++) {
        const current_value = roman_to_numeric[s[i]]
        const next_value = roman_to_numeric[s[i + 1]]
        if (next_value && next_value > current_value) {
            sum -= current_value
        } else {
            sum += current_value
        }
    }
    return sum
};