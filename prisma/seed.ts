import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: 'fernando@br.dev' },
    update: {},
    create: {
      username: 'admin',
      email: 'fernando@br.dev',
      password: 'test', // Change that to some critpto stuff
      name: 'Fernando Santos',
      role: 'ADMIN',
      profile: {
        create: {
          about: 'Olá! Eu sou o Fernando Santos',
          avatar: 'this_is_a_test.jpg',
        },
      },
    },
  });
  const moderator = await prisma.user.upsert({
    where: { email: 'moderator@br.dev' },
    update: {},
    create: {
      username: 'moderator',
      email: 'moderator@br.dev',
      password: 'test', // Change that to some critpto stuff
      name: 'Moderator Test',
      role: 'MODERATOR',
      profile: {
        create: {
          about: 'Olá! Eu sou o Moderador de Teste',
          avatar: 'this_is_a_mod_test.jpg',
        },
      },
    },
  });
  const user = await prisma.user.upsert({
    where: { email: 'user@br.dev' },
    update: {},
    create: {
      username: 'user',
      email: 'user@br.dev',
      password: 'test', // Change that to some critpto stuff
      name: 'User Test',
      role: 'USER',
      profile: {
        create: {
          about: 'Olá! Eu sou o Usuário de Teste',
          avatar: 'this_is_a_user_test.jpg',
        },
      },
    },
  });
}
main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
