import { PrismaClient } from '@prisma/client';
import { isValidPasswordHash } from '../../functions/validators';

const prisma = new PrismaClient();

export default async function handle(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({
      status: false,
      message: 'Somente requisições POST são permitidas no login de usuário.',
    });
    return;
  }

  const { email, password } = req.body;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user?.email) {
    res
      .status(401)
      .json({ status: false, message: 'Usuário não cadastrado no sistema!' });
    return;
  }

  if (!isValidPasswordHash(password, user.password)) {
    res.status(401).json({ status: false, message: 'Senha inválida!' });
    return;
  }

  delete user.password;

  res
    .status(200)
    .json({ status: true, message: 'Logado com sucecsso!', user: user });
  return;
}
