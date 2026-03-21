function swap(matrix: number[][], x1: number, y1: number, x2: number, y2: number) {
    const temp = matrix[x1][y1]
    matrix[x1][y1] = matrix[x2][y2]
    matrix[x2][y2] = temp
}

export function reverseSubmatrix(grid: number[][], x: number, y: number, k: number): number[][] {
    for (let i = 0; i < k / 2; i++) {
        for (let j = 0; j < k; j++) {
            swap(grid, x + i, y + j, x + k - 1 - i, y + j)
        }
    }
    return grid
}