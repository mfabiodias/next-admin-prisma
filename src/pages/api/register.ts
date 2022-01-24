import { PrismaClient } from '@prisma/client';
import { passwordGenerate } from '../../functions';
import { SYSVAR } from '../../config';

const prisma = new PrismaClient();

export default async function handle(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send({
      status: false,
      message:
        'Somente requisições POST são permitidas no registro de usuário.',
    });
    return;
  }

  const { email, password } = req.body;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (user?.email) {
    res.status(401).send({
      status: false,
      message: 'Usuário já encontra-se cadastrado no sistema!',
    });
    return;
  }

  const registeredUser = await prisma.user.create({
    data: {
      email,
      password: passwordGenerate(password),
      type: 'user',
      enable: SYSVAR.ADMIN.REGISTER_ENABLE ? 1 : 0,
    },
  });

  if (!registeredUser?.email) {
    res.status(401).send({
      status: false,
      message:
        'Falha ao cadastrar o usuário, tente novamente e persisitindo o erro contate o administrador.',
    });
    return;
  }

  delete registeredUser.password;

  res.status(201).send({
    status: true,
    message: 'Usuário criado com sucesso!',
    user: registeredUser,
  });
  return;
}
