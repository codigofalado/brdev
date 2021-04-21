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
}
main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
