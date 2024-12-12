import { PrismaClient } from "@prisma/client";
import { roleSeed } from "./seeds/roleSeed";
import { subscriptionSeed } from "./seeds/subscriptionSeed";
import { userSeed } from "./seeds/userSeed";
import { adminUserSeed } from "./seeds/adminUserSeed";
import { connectionSeed } from "./seeds/connectionSeed";
import { activitySeed } from "./seeds/activitySeed";

const prisma = new PrismaClient();

async function main() {
  console.log("--- Executing seeds ---");
  await roleSeed(prisma);
  await subscriptionSeed(prisma);
  await userSeed(prisma);
  await adminUserSeed(prisma);
  await connectionSeed(prisma);
  await activitySeed(prisma);
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
