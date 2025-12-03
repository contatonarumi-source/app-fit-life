const fs = require('fs')
const path = require('path')

function ok(msg) { console.log('\x1b[32m%s\x1b[0m', 'OK:', msg) }
function warn(msg) { console.log('\x1b[33m%s\x1b[0m', 'WARN:', msg) }
function err(msg) { console.error('\x1b[31m%s\x1b[0m', 'ERROR:', msg) }

const root = path.resolve(__dirname, '..')

const checks = [
  { path: 'src/components/Profile.tsx', desc: 'Componente Profile' },
  { path: 'app/profile/page.tsx', desc: 'Rota /profile' },
  { path: 'app/page.tsx', desc: 'Página raiz (index)' },
  { path: 'app/layout.tsx', desc: 'Layout global' },
  { path: 'styles/globals.css', desc: 'CSS global (Tailwind)' },
  { path: 'jest.config.cjs', desc: 'Configuração Jest' },
]

let failures = 0

checks.forEach(c => {
  const p = path.join(root, c.path)
  if (fs.existsSync(p)) {
    ok(`${c.desc} encontrado: ${c.path}`)
  } else {
    warn(`${c.desc} não encontrado: ${c.path}`)
    failures += 1
  }
})

// Basic sanity of package.json
try {
  const pkg = require(path.join(root, 'package.json'))
  if (pkg.scripts && pkg.scripts.test) ok('Script `test` presente em package.json')
  else { warn('Script `test` ausente em package.json'); failures += 1 }
} catch (e) {
  err('Não foi possível ler package.json')
  failures += 1
}

if (failures > 0) {
  console.log('\nResumo: há problemas detectados. Corrija os itens acima antes de executar testes completos.')
  process.exit(2)
} else {
  console.log('\nResumo: verificação rápida concluída com sucesso. Você pode agora rodar `npm install` e `npm test`.')
  process.exit(0)
}
