import { describe, test, expect } from 'vitest';
// Importa a função que será testada
import { twoSum } from './1.TwoSum';

// Descreve o conjunto de testes para a função twoSum
describe('twoSum', () => {
  // Caso de teste 1: Exemplo básico do LeetCode
  test('deve retornar os índices [0, 1] para nums = [2, 7, 11, 15] e target = 9', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    // A função `expect` verifica se o resultado é o esperado
    // `toEqual` é usado para comparar arrays ou objetos
    const result = twoSum(nums, target);
    // Ordena o resultado para garantir que a ordem não afete o teste
    expect(result.sort((a, b) => a - b)).toEqual([0, 1]);
  });

  // Caso de teste 2: Outro exemplo
  test('deve retornar os índices [1, 2] para nums = [3, 2, 4] e target = 6', () => {
    const nums = [3, 2, 4];
    const target = 6;
    const result = twoSum(nums, target);
    expect(result.sort((a, b) => a - b)).toEqual([1, 2]);
  });

  // Caso de teste 3: Quando a solução envolve o mesmo número duas vezes
  test('deve retornar os índices [0, 1] para nums = [3, 3] e target = 6', () => {
    const nums = [3, 3];
    const target = 6;
    const result = twoSum(nums, target);
    expect(result.sort((a, b) => a - b)).toEqual([0, 1]);
  });

  // Caso de teste 4: Sem solução encontrada
  test('deve retornar um array vazio se nenhuma solução for encontrada', () => {
    const nums = [1, 2, 3];
    const target = 7;
    expect(twoSum(nums, target)).toEqual([]);
  });

  // Caso de teste 5: Com números negativos
  test('deve funcionar com números negativos', () => {
    const nums = [-1, -5, 5, 10];
    const target = 4;
    const result = twoSum(nums, target);
    expect(result.sort((a, b) => a - b)).toEqual([0, 2]); // A ordem pode variar, vamos ajustar a função se necessário
  });
});
