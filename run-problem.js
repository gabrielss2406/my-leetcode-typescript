const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const problemNumber = process.argv[2];
if (!problemNumber) {
  console.error('Erro: Por favor, forneça o número do problema.');
  console.log('Uso: npm run code <numero-do-problema>');
  process.exit(1);
}

const testsDir = path.join(__dirname, 'tests');
let testFileName;

try {
  const files = fs.readdirSync(testsDir);
  testFileName = files.find(file => file.startsWith(`${problemNumber}.`) && file.endsWith('.test.ts'));
} catch (error) {
  console.error(`Erro ao ler o diretório 'tests': ${error.message}`);
  process.exit(1);
}

if (!testFileName) {
  console.error(`Erro: Não foi encontrado nenhum arquivo de teste começando com "${problemNumber}." na pasta 'tests'.`);
  console.error(`Certifique-se de que o arquivo de teste exista e termine com '.test.ts' (ex: ${problemNumber}.NomeDoProblema.test.ts).`);
  console.error(`Se você criou um novo problema, certifique-se de adicionar um arquivo .ts à pasta 'src' e um arquivo .test.ts à pasta 'tests'.`);
  process.exit(1);
}

const testFilePath = path.join(testsDir, testFileName);

try {
  console.log(`Executando testes para: ${testFileName}`);
  execSync(`npx vitest run "${testFilePath}"`, { stdio: 'inherit' });
} catch (error) {
  // O erro do processo filho já será impresso por stdio: 'inherit'
  console.error(`
Erro ao executar os testes.`);
  process.exit(1);
}