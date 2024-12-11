import { type PrismaClient } from "@prisma/client";
import { hashPassword } from "./utils/hashPassword";
import { IUserInput } from "./types/userInput";

export const userSeed = async (prisma: PrismaClient) => {
  try {
    const clientRole = await prisma.role.findUniqueOrThrow({
      select: {
        name: true,
        id: true,
      },
      where: {
        code: "CLI",
      },
    });

    const subscription = await await prisma.subscription.findUniqueOrThrow({
      select: {
        name: true,
        id: true,
      },
      where: {
        code: "PLA",
      },
    });

    const usersData: IUserInput[] = [];

    for (let i = 0; i < 50; i++) {
      const newUser: IUserInput = {
        email: `usuario-${i}@gmail.com`,
        password: hashPassword("Cliente-123."),
        role_id: clientRole.id,
        username: `usuario-${i}`,
      };

      if (i % 2 === 0) {
        newUser.subscription_id = subscription.id;
      }

      usersData.push(newUser);
    }

    await prisma.user.createMany({
      data: usersData,
    });
    console.log("User seed completed");
  } catch (error) {
    console.error("An error has been ocurred on ===> userSeed.ts:\n", error);
  }
};
