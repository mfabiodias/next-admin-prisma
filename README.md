### SETUP STEPS

- 1-) npm install
- 2-) cp .env.example .env
- 3-) Criar propjeto Firebase no Google
- 4-) Adicione formar de logar-se no firebase. Exe: User/Pass and Google SSO
- 5-) Alterar seu ENV com as credenciais do Firebase
- 6-) npm run dev

### ABOUT

- Admin template básico, com responsividade e Login (user/pass) com ORM PrismaJS.
- Sistema desenvolvido com as tecnologias, ReacJS, NextJS, PrismaJS e TailwindCSS.

### CONFIGS

- No arquivo .env configure os dados do seu banco de dados e seed do usuário ADMIN
- No arquivo de config (src/config/index.js) você opde ajustar as configs da empresa
- prisma/schema.prisma

### Prisma SETUP

- npm install prisma --save-dev
- Inicio o prisma em seu projeto (npx prisma init)
- set seu database no arquivo prisma/schema.prisma
- Se estiver utilizando o prisma em um projeto existente, pode mapear as tabelas com o INTROSPECTION (npx prisma db pull)
- Instale o prisma client (npm install @prisma/client)
- Gere os schemas com o prisma para acesso ao seu BD (npx prisma generate)

### Criando suas migration

- npx prisma migrate dev ( Crias as migrations)
- npx prisma migrate reset (Reinicias as migrations)

### Criando suas seeds

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

4. tsconfig.json set "isolatedModules": false

```
PS: Caso o babel set automaticamente como TRUE, vc pode alterar para rodar seu seed.

The following mandatory changes were made to your tsconfig.json:
  - isolatedModules was set to true (requirement for babel)
```

5. Crie seu arquivo seed. (Exe.: https://github.com/prisma/prisma-examples/blob/latest/typescript/graphql/prisma/seed.ts)

6. npx prisma db seed

### Gerenciando seu banco de dados com o Prisma Studio

- npx prisma studio
