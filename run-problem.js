const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const problemNumber = process.argv[2];
if (!problemNumber) {
  console.error('Erro: Por favor, forneça o número do problema.');
  console.log('Uso: npm run code <numero-do-problema>');
  process.exit(1);
}

const srcDir = path.join(__dirname, 'src');
let testFileName;

try {
  const files = fs.readdirSync(srcDir);
  testFileName = files.find(file => file.startsWith(`${problemNumber}.`) && file.endsWith('.test.ts'));
} catch (error) {
  console.error(`Erro ao ler o diretório 'src': ${error.message}`);
  process.exit(1);
}

if (!testFileName) {
  console.error(`Erro: Não foi encontrado nenhum arquivo de teste começando com "${problemNumber}." na pasta 'src'.`);
  console.error(`Certifique-se de que o arquivo de teste exista e termine com '.test.ts' (ex: ${problemNumber}.NomeDoProblema.test.ts).`);
  process.exit(1);
}

const testFilePath = path.join(srcDir, testFileName);

try {
  console.log(`Executando testes para: ${testFileName}`);
  execSync(`npx vitest run "${testFilePath}"`, { stdio: 'inherit' });
} catch (error) {
  // O erro do processo filho já será impresso por stdio: 'inherit'
  console.error(`
Erro ao executar os testes.`);
  process.exit(1);
}