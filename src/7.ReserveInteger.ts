function rev(x: number): number {
    let result = 0;
    let num = Math.abs(x);

    while (num > 0) {
        result = result * 10 + (num % 10);
        num = Math.floor(num / 10);
    }

    return result;
}

export function reverse(x: number): number {
    const sinal = x < 0 ? -1 : 1;
    const inverted = rev(x) * sinal;

    const MAX = 2 ** 31 - 1;
    const MIN = -(2 ** 31);
    if (inverted > MAX || inverted < MIN) return 0;

    return inverted;
};