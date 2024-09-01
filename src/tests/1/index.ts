console.log(`----------------- Teste (1) ------------------`);

function pertenceFibonacci(num: number): string {
  let a = 0,
    b = 1;

  // Verifica se o número informado é 0 ou 1, que pertencem à sequência
  if (num === a || num === b) {
    return `O número ${num} pertence à sequência de Fibonacci.`;
  }

  // Gera a sequência de Fibonacci até que o valor seja maior ou igual ao número informado
  let c = a + b;
  while (c <= num) {
    if (c === num) {
      return `O número ${num} pertence à sequência de Fibonacci.`;
    }
    a = b;
    b = c;
    c = a + b;
  }

  return `O número ${num} não pertence à sequência de Fibonacci.`;
}

// Exemplo de uso
const numeroInformado = 21;
const resultado = pertenceFibonacci(numeroInformado);

console.log(resultado);
console.log(`----------------------------------------------`);
