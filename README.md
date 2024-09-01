# Target - Estágio | Ribeirão Preto

---

Este documento fornece instruções para executar os testes técnicos implementados em TypeScript. Abaixo você encontrará informações sobre como instalar as dependências e executar os testes, bem como uma breve explicação sobre TypeScript.

## Sobre o TypeScript

[TypeScript](https://www.typescriptlang.org/) é um superset do JavaScript que adiciona tipagem estática à linguagem. Ele melhora a robustez do código e fornece ferramentas avançadas para um desenvolvimento mais eficiente. Neste teste técnico, o TypeScript é utilizado para garantir um código mais confiável e fácil de manter.

## Instalação das Dependências

Para preparar o ambiente e executar os testes, siga estes passos:

1. **Clone o Repositório** (se necessário):

   ```bash
   git clone https://github.com/eobrunodias/target-test-rp.git
   ```

2. **Navegue até o Diretório do Teste**:

   ```bash
   cd target-test-rp
   ```

3. **Instale as Dependências**:

   Certifique-se de ter o [Node.js](https://nodejs.org/) instalado. Em seguida, instale as dependências com o comando:

   ```bash
   npm install
   ```

## Como Executar os Testes

Os testes estão organizados em diretórios separados. Cada diretório contém um arquivo TypeScript que corresponde a um teste específico. Para executar todos os testes, utilize o comando:

```bash
npm run dev
```

Este comando irá:

1. Compilar o código TypeScript.
2. Executar cada um dos testes.

### Testes Disponíveis

- **Teste 1**: Implementado em `src/tests/1/index.ts`.
- **Teste 2**: Implementado em `src/tests/2/index.ts`.
- **Teste 3**: Implementado em `src/tests/3/index.ts`.
- **Teste 4**: Implementado em `src/tests/4/index.ts`.

**Nota:** O diretório `src/tests/5` contém um arquivo README explicando a solução para o Teste 5, mas não possui um executável específico. Para detalhes sobre a solução do Teste 5, consulte `src/tests/5/README.md`.

## Estrutura do Diretório

O diretório do teste técnico está organizado da seguinte forma:

```structure
target-test-rp/
├── src/
│   └── tests/
│       ├── 1/
│       │   └── index.ts
│       ├── 2/
│       │   └── index.ts
│       ├── 3/
│       │   └── index.ts
│       ├── 4/
│       │   └── index.ts
│       └── 5/
│           └── README.md
├── package.json
├── tsconfig.json
└── README.md
```

- **`src/tests/1/index.ts` a `src/tests/4/index.ts`**: Contêm os códigos dos testes.
- **`src/tests/5/README.md`**: Explica a resolução do Teste 5.
- **`package.json`**: Contém as dependências e scripts para execução dos testes.
- **`tsconfig.json`**: Configurações do TypeScript.

## Detalhes dos Scripts

No `package.json`, o script `"dev"` é configurado para compilar e executar os testes:

```json
"scripts": {
  "build": "tsc",
  "start:test1": "ts-node src/tests/1/index.ts",
  "start:test2": "ts-node src/tests/2/index.ts",
  "start:test3": "ts-node src/tests/3/index.ts",
  "start:test4": "ts-node src/tests/4/index.ts",
  "dev": "npm run start:test1 && npm run start:test2 && npm run start:test3 && npm run start:test4"
}
```
