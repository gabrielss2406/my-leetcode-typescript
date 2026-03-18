// Applying Prefix Sum Design Pattern
// Cada célula acumula a soma da célula acima, da célula à esquerda, subtrai o canto superior esquerdo (que foi somado duas vezes) e adiciona o valor atual do grid.
function buildPrefixSum2D(grid: number[][]): number[][] {
    const m = grid.length;
    const n = grid[0].length;
    const ps = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            ps[i][j] = grid[i - 1][j - 1]
                + ps[i - 1][j]
                + ps[i][j - 1]
                - ps[i - 1][j - 1];
        }
    }
    return ps;
}

export function countSubmatrices(grid: number[][], k: number) {
    const ps = buildPrefixSum2D(grid);

    const m = ps.length;
    const n = ps[0].length;

    let count = 0;
    for (let i = 1; i <= m - 1; i++) {
        for (let j = 1; j <= n - 1; j++) {
            if (ps[i][j] <= k) count++;
        }
    }

    return count;
};