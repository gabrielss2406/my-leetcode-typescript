function isDigit(char: string): boolean {
    return /^[0-9]$/.test(char);
}

const INT_MAX = 2147483647;   // 2^31 - 1
const INT_MIN = -2147483648;  // -2^31

export function myAtoi(s: string): number {
    let factor = 1;
    let result = 0;
    s = s.trim();

    if (s[0] === '-' || s[0] === '+') {
        factor = s[0] === '-' ? -1 : 1;
        s = s.slice(1);
    }

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (isDigit(char)) {
            result = result * 10 + parseInt(char);
        } else {
            break;
        }
    }

    result *= factor;

    if (result > INT_MAX) {
        return INT_MAX;
    }
    if (result < INT_MIN) {
        return INT_MIN;
    }

    return result;
};