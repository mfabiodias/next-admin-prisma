import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export default async function handle(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send({
      status: false,
      message: 'Somente requisições POST são permitidas.',
    });
    return;
  }

  const { email, password } = req.body;

  const user = await prisma.user.findFirst({
    where: { email: email },
  });

  if (!user?.email) {
    res
      .status(200)
      .send({ status: false, message: 'Usuário não cadastrado no sistema!' });
    return;
  }

  if (user.password != password) {
    res.status(200).send({ status: false, message: 'Senha inválida!' });
    return;
  }

  delete user.password;
  user['image'] = null;

  res
    .status(200)
    .send({ status: true, message: 'Logado com sucecsso!', user: user });
  return;
}
