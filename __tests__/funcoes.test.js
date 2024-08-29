
const { adicao, subtracao, multiplicacao, divisao } = require('../src/funcoes');

// Testes para a função de adição
test('adiciona 1 + 2 para igualar 3', () => {
  expect(adicao(1, 2)).toBe(3);
});

// Testes para a função de subtração
test('subtrai 5 - 3 para igualar 2', () => {
  expect(subtracao(5, 3)).toBe(2);
});

// Testes para a função de multiplicação
test('multiplica 3 * 4 para igualar 12', () => {
  expect(multiplicacao(3, 4)).toBe(12);
});

// Testes para a função de divisão
test('divide 10 por 2 para igualar 5', () => {
  expect(divisao(10, 2)).toBe(5);
});

// Teste para divisão por zero
test('divisão por zero deve lançar um erro', () => {
  expect(() => divisao(10, 0)).toThrow('Divisão por zero não é permitida.');
});