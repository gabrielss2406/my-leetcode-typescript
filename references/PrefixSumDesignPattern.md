# Prefix Sum

Prefix sum é um padrão de design que pré-computa somas acumuladas de um array ou matriz, permitindo consultas de soma em intervalo em **O(1)** após uma construção inicial em **O(n)**.

---

## 1D — Array

Dado um array `arr`, o prefix sum `ps` é definido como:

```
ps[i] = arr[0] + arr[1] + ... + arr[i]
```

### Construção

```typescript
function buildPrefixSum(arr: number[]): number[] {
  const ps = new Array(arr.length + 1).fill(0);
  for (let i = 1; i <= arr.length; i++) {
    ps[i] = ps[i - 1] + arr[i - 1];
  }
  return ps;
}
```

> A convenção de adicionar uma posição extra no início (padding com zero) simplifica a fórmula de consulta.

### Consulta de intervalo `[l, r]`

```typescript
const sum = ps[r + 1] - ps[l];
```

Sem o padding, seria necessário tratar o caso `l === 0` separadamente.

---

## 2D — Matriz

Dado um grid `m x n`, o prefix sum `ps` é definido como:

```
ps[i][j] = soma de todos os elementos de (0,0) até (i-1, j-1)
```

### Construção

A fórmula usa inclusion-exclusion para reaproveitar valores já calculados:

```
ps[i][j] = grid[i-1][j-1]
          + ps[i-1][j]      ← linha acima
          + ps[i][j-1]      ← coluna à esquerda
          - ps[i-1][j-1]    ← canto superior esquerdo (somado duas vezes)
```

```typescript
function buildPrefixSum2D(grid: number[][]): number[][] {
  const m = grid.length;
  const n = grid[0].length;
  const ps = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      ps[i][j] = grid[i-1][j-1]
               + ps[i-1][j]
               + ps[i][j-1]
               - ps[i-1][j-1];
    }
  }
  return ps;
}
```

### Consulta de submatriz `(r1,c1)` até `(r2,c2)`

```typescript
const sum = ps[r2+1][c2+1]
          - ps[r1][c2+1]
          - ps[r2+1][c1]
          + ps[r1][c1];
```

---

## Complexidade

| Etapa       | 1D     | 2D         |
|-------------|--------|------------|
| Construção  | O(n)   | O(m × n)   |
| Consulta    | O(1)   | O(1)       |
| Espaço      | O(n)   | O(m × n)   |

---

## Quando usar

- Múltiplas consultas de soma em intervalo/submatriz
- Contagem de submatrizes/subarrays que satisfazem alguma condição de soma
- Problemas onde a soma acumulada a partir de um ponto fixo (ex: top-left) é o foco

---

## Exemplo de problema

**LeetCode 3070 — Count Submatrices with Top-Left Element and Sum ≤ k**

Toda submatriz que contém o elemento `(0,0)` termina em algum `(i,j)`. Basta contar quantos `ps[i+1][j+1] <= k`.

```typescript
function countSubmatrices(grid: number[][], k: number): number {
  const m = grid.length;
  const n = grid[0].length;
  const ps = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  let count = 0;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      ps[i][j] = grid[i-1][j-1] + ps[i-1][j] + ps[i][j-1] - ps[i-1][j-1];
      if (ps[i][j] <= k) count++;
    }
  }
  return count;
}
```