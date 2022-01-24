### SETUP STEPS

- 1-) npm install
- 2-) cp .env.example .env
- 3-) Criar propjeto Firebase no Google
- 4-) Adicione formar de logar-se no firebase. Exe: User/Pass and Google SSO
- 5-) Alterar seu ENV com as credenciais do Firebase
- 6-) npm run dev

### ABOUT

- Admin template básico, com responsividade, Login (user/pass) e Social Login do Google com o Firebase.
- Sistema desenvolvido com as tecnologias, ReacJS, NextJS, Firebase e TailwindCSS.

### CONFIGS

- No arquivo .env configure os dados do seu banco de dados
- No arquivo de config (src/config/index.js) você opde ajustar as configs da empresa

- npx prisma db seed --preview-feature

1. Open the package.json of your project
2. Add the following example to it:

```
"prisma": {
  "seed": "ts-node prisma/seed.ts"
}
```

If you are using ESM (ECMAScript modules):

```
"prisma": {
  "seed": "node --loader ts-node/esm prisma/seed.ts"
}
```

3. Install the required dependencies by running:
   npm i -D ts-node typescript @types/node

4. tsconfig.json set "isolatedModules": false,
