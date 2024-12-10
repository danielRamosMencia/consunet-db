import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const users = await prisma.user.findMany();

  console.log(users);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error("An error has been ocurred on ===> query.ts:\n", error);
    await prisma.$disconnect();
    process.exit(1);
  });
