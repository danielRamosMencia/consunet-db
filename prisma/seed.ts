import { PrismaClient } from "@prisma/client";
import { roleSeed } from "./seeds/roleSeed";
import { subscriptionSeed } from "./seeds/subscriptionSeed";

const prisma = new PrismaClient();

async function main() {
  console.log("--- Executing seeds ---");
  await roleSeed(prisma);
  await subscriptionSeed(prisma);
  console.log("--- Seeds execution completed ---");
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
