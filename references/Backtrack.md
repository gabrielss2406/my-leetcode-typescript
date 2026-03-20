# Backtracking

## O que é?

Backtracking é uma técnica algorítmica de **busca exaustiva com poda**. A ideia central é construir uma solução incrementalmente, e sempre que uma escolha parcial violar alguma restrição, **voltar atrás** (*backtrack*) e tentar outro caminho.

É uma forma estruturada de explorar todas as possibilidades sem precisar gerar tudo de antemão — você só avança quando faz sentido, e recua quando não faz.

---

## O problema: Gerar parênteses válidos

> Dado `n` pares de parênteses, gere todas as combinações bem formadas.

```
n = 3 → ["((()))", "(()())", "(())()", "()(())", "()()()"]
```

Esse é um problema clássico de backtracking porque:

- Há uma estrutura de decisão em cada passo: colocar `(` ou `)`
- Nem toda escolha é válida (não dá pra fechar antes de abrir)
- Queremos **todas** as soluções válidas, não só uma

---

## Como o backtracking resolve

A cada posição da string, tomamos uma decisão:

1. **Abrir `(`** → válido se ainda temos parênteses abertos disponíveis (`open < n`)
2. **Fechar `)`** → válido se há mais abertos do que fechados (`close < open`)

Se chegarmos em uma string de tamanho `2n`, ela está completa e é adicionada ao resultado.

### Árvore de decisão para `n = 2`

```
                ""
               /
             "("
            /    \
         "(("    "()"
          |       |
        "(()"   "()("
          |       |
        "(())"  "()()"
```

Cada nó é um estado parcial. Os ramos inválidos simplesmente não são explorados — isso é a **poda**.

---

## Implementação

```typescript
export function generateParenthesis(n: number): string[] {
    const result: string[] = [];

    function backtrack(open: number, close: number, current: string) {
        // Caso base: combinação completa
        if (current.length === 2 * n) {
            result.push(current);
            return;
        }

        // Decisão 1: adicionar abertura
        if (open < n) {
            backtrack(open + 1, close, current + '(');
        }

        // Decisão 2: adicionar fechamento (só se houver aberto pendente)
        if (close < open) {
            backtrack(open, close + 1, current + ')');
        }
    }

    backtrack(0, 0, '');

    return result;
}
```

---

## Anatomia de um backtracking

Todo backtracking tem a mesma estrutura geral:

```python
def backtrack(estado_atual):
    if eh_solucao(estado_atual):
        salvar(estado_atual)
        return

    for escolha in escolhas_possiveis(estado_atual):
        if eh_valida(escolha):
            fazer(escolha)
            backtrack(novo_estado)
            desfazer(escolha)  # ← o "back" do backtrack
```

No problema dos parênteses, o "desfazer" é implícito porque usamos concatenação de strings (imutável). Em problemas com estruturas mutáveis (listas, matrizes), o passo de desfazer é explícito e essencial.

---

## Complexidade

| | Valor |
|---|---|
| **Tempo** | O(4ⁿ / √n) — número de sequências válidas (números de Catalan) |
| **Espaço** | O(n) — profundidade da pilha de recursão |

O número de combinações válidas cresce seguindo os **números de Catalan**: 1, 2, 5, 14, 42, 132...

---

## Quando usar backtracking?

Backtracking é a abordagem certa quando:

- Você precisa de **todas** as soluções (ou a melhor entre todas)
- O espaço de busca é grande mas tem **restrições** que permitem podar caminhos inválidos cedo
- O problema tem estrutura de **decisão sequencial** (a cada passo, escolha entre opções)

Exemplos clássicos: N-Queens, Sudoku, permutações, subconjuntos, labirintos.