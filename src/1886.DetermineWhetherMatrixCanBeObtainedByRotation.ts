function rotate(matrix: number[][]): void {
    const n = matrix.length;

    // transpose
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    // reverse
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
}

function compareMatrix(mat: number[][], target: number[][]) {
    for (let i = 0; i < mat.length; i++)
        for (let j = 0; j < mat.length; j++)
            if (mat[i][j] != target[i][j]) return false;

    return true;
}

export function findRotation(mat: number[][], target: number[][]): boolean {
    for (let i = 0; i < 4; i++) {
        if (compareMatrix(mat, target)) return true;
        rotate(mat);
    }

    return false;
};