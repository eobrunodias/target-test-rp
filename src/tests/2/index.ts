console.log(`----------------- Teste (2) ------------------`);

function verificarLetraA(str: string): void {
  let contador = 0;

  // Converte a string para minúsculas para tratar 'A' e 'a' da mesma forma
  const stringMinuscula = str.toLowerCase();

  // Percorre a string verificando cada caractere
  for (let i = 0; i < stringMinuscula.length; i++) {
    if (stringMinuscula[i] === "a") {
      contador++;
    }
  }

  if (contador > 0) {
    console.log(`A letra 'a' aparece ${contador} vezes na string.`);
  } else {
    console.log("A letra 'a' não aparece na string.");
  }
}

// Exemplo de uso
const stringInformada = "A casa é amarela e ampla.";
verificarLetraA(stringInformada);

console.log(`----------------------------------------------`);
