# app-fit-life

Componente `Profile` integrado em uma scaffold mínima Next.js (app dir) com Tailwind.

Como rodar localmente

- Instale dependências:

```bash
npm install
```

- Rode o servidor de desenvolvimento:

```bash
npm run dev
```

Depois de iniciar, abra `http://localhost:3000` para ver a página com o componente `Profile`.

Verificações rápidas (sem instalar deps)

- Rodar checagem básica de arquivos:

```bash
npm run quick-check
```

Testes unitários

- Após `npm install`, rode os testes:

```bash
npm test
# ou para execução em série (mais estável em CI):
npm run test:unit
```

O projeto adiciona estes arquivos principais:

- `src/components/Profile.tsx` — seu componente (já adicionado).
- `app/page.tsx` — página de exemplo que importa e renderiza o componente.
- `app/page.tsx` — página inicial com link para `/profile`.
- `app/profile/page.tsx` — rota separada que renderiza o componente `Profile`.
- `app/layout.tsx` — layout global que importa `styles/globals.css`.
- `styles/globals.css` — configuração Tailwind.
- `package.json`, `tailwind.config.js`, `postcss.config.js`, `tsconfig.json` — configuração mínima para rodar.

Observações

- O Tailwind já está configurado, mas se quiser ajustar cores/tema edite `tailwind.config.js`.
- Se preferir integrar em uma estrutura diferente (CRA, Vite, Next pages), eu adapto os arquivos.
 
Publicação (CI / Deploy)

Opções comuns para publicar este app:

- Vercel (recomendado para Next.js): conecte o repositório no painel da Vercel e adicione as seguintes secrets no GitHub (Repository -> Settings -> Secrets -> Actions):
	- `VERCEL_TOKEN` — token pessoal da Vercel
	- `VERCEL_ORG_ID` — ID da organização/projeto (fornecido pela Vercel)
	- `VERCEL_PROJECT_ID` — ID do projeto Vercel

	Eu adicionei um workflow de exemplo em `.github/workflows/deploy-vercel.yml` que usa a action `amondnet/vercel-action`. Ele roda automaticamente em pushes na branch `main` quando as secrets estiverem configuradas.

- GitHub Actions (CI): um workflow de CI está em `.github/workflows/ci.yml`. Ele executa `npm run quick-check`, instala dependências, executa testes com `npm run test:unit` e faz o `next build`.

Como publicar manualmente na Vercel (passos gerais):

1. Crie conta e projeto na Vercel (https://vercel.com).
2. Conecte seu repositório GitHub ao projeto.
3. Configure as variáveis/secretos conforme necessário no GitHub (se usar o workflow de deploy automatizado).
4. Ao fazer push para `main`, o workflow `deploy-vercel.yml` fará o deploy.

Se quiser, posso:
- preparar um `vercel.json` com rotas específicas;
- criar um workflow para deploy em outro provedor (Netlify, GitHub Pages com export estático, etc.);
- ou tentar executar `npm ci` e `npm run test:unit` aqui (posso tentar outra vez, mas pode falhar pelo problema do provedor de FS do container).

# app-fit-life
- app-fit-life
