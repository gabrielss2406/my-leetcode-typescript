# LeetCode Solutions with TypeScript

Este projeto é um ambiente configurado para resolver e testar problemas do LeetCode usando TypeScript. Ele inclui configurações de linting (Biome), compilação (TypeScript) e testes (Vitest) para garantir um código de alta qualidade.

## Estrutura do Projeto

```
.
├── src/
│   ├── 1.TwoSum.ts
│   ├── 1.TwoSum.test.ts
│   ├── 2.AddTwoNumbers.ts
│   └── ...
├── run-problem.js
├── biome.json
├── package.json
├── tsconfig.json
└── README.md
```

- `src/`: Contém os arquivos de solução (`.ts`) e seus respectivos arquivos de teste (`.test.ts`).
- `run-problem.js`: Um script auxiliar para executar os testes de um problema específico.
- `biome.json`: Configuração do Biome para linting e formatação.
- `tsconfig.json`: Configuração do TypeScript.
- `README.md`: Este arquivo.

## Configuração Inicial

Para configurar o ambiente, siga os passos abaixo:

1.  **Clone o repositório** (se aplicável) ou navegue até o diretório do projeto.

2.  **Instale as dependências**:
    ```bash
    npm install
    ```
    Isso instalará o TypeScript, `ts-node`, Vitest e outras ferramentas de desenvolvimento.

## Como Usar

### 1. Adicionar um Novo Problema

1.  Crie dois novos arquivos dentro da pasta `src/`:
    *   Um arquivo `.ts` para a sua solução (ex: `N.NomeDoProblema.ts`, onde `N` é o número do problema).
    *   Um arquivo `.test.ts` correspondente para os testes (ex: `N.NomeDoProblema.test.ts`).

2.  No seu arquivo `.ts` de solução, **lembre-se de exportar a função** ou classe que você deseja testar.

    ```typescript
    // src/N.NomeDoProblema.ts
    export function minhaFuncaoDeSolucao(args: any): any {
      // Sua implementação aqui
    }
    ```

3.  No seu arquivo `.test.ts`, importe a função e escreva seus casos de teste usando a sintaxe do Vitest (que é muito semelhante ao Jest).

    ```typescript
    // src/N.NomeDoProblema.test.ts
    import { describe, test, expect } from 'vitest';
    import { minhaFuncaoDeSolucao } from './N.NomeDoProblema';

    describe('minhaFuncaoDeSolucao', () => {
      test('deve retornar o resultado esperado para o caso 1', () => {
        expect(minhaFuncaoDeSolucao(entrada1)).toEqual(saidaEsperada1);
      });

      test('deve lidar com casos de borda', () => {
        expect(minhaFuncaoDeSolucao(entradaDeBorda)).toEqual(saidaEsperadaDeBorda);
      });
    });
    ```

### 2. Rodar Testes de um Problema Específico

Para executar os testes de um problema específico (ex: problema de número 1), use o seguinte comando:

```bash
npm run code 1
```

O script `run-problem.js` irá procurar pelo arquivo `1.NomeDoProblema.test.ts` e executará os testes com o Vitest.

### 3. Rodar Todos os Testes

Para executar todos os testes configurados no projeto:

```bash
npm test
```

Este comando usará o Vitest para encontrar e executar todos os arquivos `*.test.ts` na pasta `src`.

### 4. Usar a Interface Gráfica do Vitest (UI)

Para uma experiência de teste interativa com uma interface gráfica no navegador:

```bash
npm run test:ui
```

Isso iniciará um servidor local e abrirá o Vitest UI no seu navegador padrão, permitindo que você visualize, filtre e re-execute os testes facilmente.

## Qualidade de Código

Este projeto utiliza o [Biome](https://biomejs.dev/) para garantir a qualidade do código (linting e formatação). Você pode rodar o Biome manualmente para verificar e formatar seus arquivos:

```bash
npx biome check .
npx biome format --write .
```

A configuração do Biome está em `biome.json`.