import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("TO DO - Create seeds files");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error("An error has been ocurred on ===> seed.ts:\n", error);
    await prisma.$disconnect();
    process.exit(1);
  });
