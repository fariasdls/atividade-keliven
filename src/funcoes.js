// Função de adição
function adicao(a, b) {
    return a + b;
  }
  
  // Função de subtração
  function subtracao(a, b) {
    return a - b;
  }
  
  // Função de multiplicação
  function multiplicacao(a, b) {
    return a * b;
  }
  
  // Função de divisão com tratamento de erro para divisão por zero
  function divisao(a, b) {
    if (b === 0) {
      throw new Error("Divisão por zero não é permitida.");
    }
    return a / b;
  }
  
  module.exports = { adicao, subtracao, multiplicacao, divisao };