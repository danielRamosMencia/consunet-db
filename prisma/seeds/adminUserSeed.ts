import type { PrismaClient } from "@prisma/client";
import { hashPassword } from "./utils/hashPassword";
import { IAdminUserInput } from "./types/adminUserInput";

export const adminUserSeed = async (prisma: PrismaClient) => {
  try {
    const adminRole = await prisma.role.findUniqueOrThrow({
      select: {
        name: true,
        id: true,
      },
      where: {
        code: "ADM",
      },
    });

    const plainTextPass = "Admin-123.";

    const adminUsersData: IAdminUserInput[] = [
      {
        email: "admin-0@gmail.com",
        password: hashPassword(plainTextPass),
        role_id: adminRole.id,
        token: "000",
        username: "admin-0",
      },
      {
        email: "admin-1@gmail.com",
        password: hashPassword(plainTextPass),
        role_id: adminRole.id,
        token: "001",
        username: "admin-1",
      },
      {
        email: "admin-2@gmail.com",
        password: hashPassword(plainTextPass),
        role_id: adminRole.id,
        token: "002",
        username: "admin-2",
      },
    ];

    await prisma.adminUser.createMany({
      data: adminUsersData,
    });

    console.log("Admin user seed completed.");
  } catch (error) {
    console.error(
      "An error has been ocurred on ===> adminUserSeed.ts:\n",
      error
    );
  }
};
