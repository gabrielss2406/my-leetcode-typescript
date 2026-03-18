export function plusOne(digits: number[]): number[] {
    const len = digits.length;

    for (let i = len - 1; i >= 0; i--) {
        if (digits[i] != 9) {
            digits[i]++; // resolve e ja retorna
            return digits;
        }
        digits[i] = 0; // vai 1 ( 9 + 1 )
    }

    digits.unshift(1); // se chegar aqui, é pq todos os digitos eram 9, entao adiciona o 1 no inicio do array

    return digits;
};