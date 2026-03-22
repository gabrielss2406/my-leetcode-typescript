# Matrix Algorithms

## 1. Rotate Matrix

Rotacionar uma matriz 90° no sentido horário (in-place) é feito em dois passos:

1. **Transpor** a matriz (trocar `matrix[i][j]` com `matrix[j][i]`)
2. **Inverter** cada linha horizontalmente

```typescript
function rotateMatrix(matrix: number[][]): void {
    const n = matrix.length;

    // Passo 1: transpor
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    // Passo 2: inverter cada linha
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
}
```

```
Original        Transposta      Rotacionada 90°
1 2 3           1 4 7           7 4 1
4 5 6    -->    2 5 8    -->    8 5 2
7 8 9           3 6 9           9 6 3
```

> Para rotacionar **90° anti-horário**: primeiro inverta cada linha, depois transponha.  
> Para **180°**: inverta cada linha e depois cada coluna.

---

## 2. Transpose

Transpor uma matriz significa trocar linhas por colunas: o elemento `[i][j]` vai para `[j][i]`.

Para matrizes **quadradas** (in-place):

```typescript
function transpose(matrix: number[][]): void {
    const n = matrix.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
}
```

Para matrizes **retangulares** (M×N → N×M), é necessário criar uma nova matriz:

```typescript
function transposeRect(matrix: number[][]): number[][] {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const result: number[][] = Array.from({ length: cols }, () => Array(rows));

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            result[j][i] = matrix[i][j];
        }
    }
    return result;
}
```

```
Original (2×3)      Transposta (3×2)
1 2 3         -->   1 4
4 5 6               2 5
                    3 6
```

---

## 3. Spiral Matrix

Percorrer (ou preencher) uma matriz em espiral, camada por camada, de fora para dentro.

**Leitura em espiral:**

```typescript
function spiralOrder(matrix: number[][]): number[] {
    const result: number[] = [];
    let top = 0, bottom = matrix.length - 1;
    let left = 0, right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        // →  esquerda para direita
        for (let j = left; j <= right; j++) result.push(matrix[top][j]);
        top++;

        // ↓  topo para baixo
        for (let i = top; i <= bottom; i++) result.push(matrix[i][right]);
        right--;

        // ←  direita para esquerda
        if (top <= bottom) {
            for (let j = right; j >= left; j--) result.push(matrix[bottom][j]);
            bottom--;
        }

        // ↑  baixo para cima
        if (left <= right) {
            for (let i = bottom; i >= top; i--) result.push(matrix[i][left]);
            left++;
        }
    }
    return result;
}
```

```
1  2  3  4
5  6  7  8      -->   [1,2,3,4,8,12,11,10,9,5,6,7]
9  10 11 12
```

**Estratégia:** quatro ponteiros (`top`, `bottom`, `left`, `right`) que avançam conforme cada borda é consumida.

---

## 4. Zigzag

Percorrer a matriz em diagonal alternando a direção — para baixo-direita e para cima-direita.

```typescript
function zigzagOrder(matrix: number[][]): number[] {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const result: number[] = [];
    let row = 0, col = 0;
    let goingDown = true;

    for (let i = 0; i < rows * cols; i++) {
        result.push(matrix[row][col]);

        if (goingDown) {
            if (col === 0 || row === rows - 1) {
                goingDown = false;
                if (row === rows - 1) col++;
                else row++;
            } else {
                row++;
                col--;
            }
        } else {
            if (row === 0 || col === cols - 1) {
                goingDown = true;
                if (col === cols - 1) row++;
                else col++;
            } else {
                row--;
                col++;
            }
        }
    }
    return result;
}
```

```
1  2  6  7
3  5  8  11     -->   [1,2,3,4,5,6,7,8,9,10,11,12]
4  9  10 12
```

**Estratégia:** um flag `goingDown` controla a direção da diagonal. Ao bater nas bordas (topo, base, esquerda, direita), a direção inverte e o ponteiro avança para a próxima diagonal.

---

## Resumo

| Algoritmo      | Técnica principal              | Complexidade    |
|----------------|-------------------------------|-----------------|
| Rotate Matrix  | Transpor + inverter linhas    | O(n²) / O(1)   |
| Transpose      | Trocar `[i][j]` ↔ `[j][i]`   | O(n²) / O(1)*  |
| Spiral Matrix  | 4 ponteiros de borda          | O(m·n) / O(1)  |
| Zigzag         | Flag de direção diagonal      | O(m·n) / O(1)  |

*\* O(m·n) de espaço para matrizes retangulares.*