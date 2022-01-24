const { PrismaClient } = require('@prisma/client');
const { AdminSeed } = require('./adminSeed');

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({ data: AdminSeed });
}

main()
  .catch(e => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
