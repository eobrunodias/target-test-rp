console.log(`----------------- Teste (4) ------------------`);

function proximoElemento(): void {
  // a) Sequência de números ímpares consecutivos
  const sequenciaA = [1, 3, 5, 7];
  const proximoA = sequenciaA[sequenciaA.length - 1] + 2;
  console.log(`a) Próximo elemento: ${proximoA}`);

  // b) Progressão geométrica com razão 2
  const sequenciaB = [2, 4, 8, 16, 32, 64];
  const proximoB = sequenciaB[sequenciaB.length - 1] * 2;
  console.log(`b) Próximo elemento: ${proximoB}`);

  // c) Quadrados dos números naturais
  const sequenciaC = [0, 1, 4, 9, 16, 25, 36];
  const proximoC = (Math.sqrt(sequenciaC[sequenciaC.length - 1]) + 1) ** 2;
  console.log(`c) Próximo elemento: ${proximoC}`);

  // d) Quadrados dos números pares
  const sequenciaD = [4, 16, 36, 64];
  const proximoD = (Math.sqrt(sequenciaD[sequenciaD.length - 1]) + 2) ** 2;
  console.log(`d) Próximo elemento: ${proximoD}`);

  // e) Sequência de Fibonacci
  const sequenciaE = [1, 1, 2, 3, 5, 8];
  const proximoE =
    sequenciaE[sequenciaE.length - 1] + sequenciaE[sequenciaE.length - 2];
  console.log(`e) Próximo elemento: ${proximoE}`);

  // f) Sequência com um padrão irregular
  const sequenciaF = [2, 10, 12, 16, 17, 18, 19];
  const proximoF = sequenciaF[sequenciaF.length - 1] + 1; // Seguimos o padrão de incremento
  console.log(`f) Próximo elemento: ${proximoF}`);
}

// Executando a função
proximoElemento();

/*
Resultado:

a) Próximo elemento: 9
b) Próximo elemento: 128
c) Próximo elemento: 49
d) Próximo elemento: 100
e) Próximo elemento: 13
f) Próximo elemento: 20
*/

console.log(`----------------------------------------------`);
