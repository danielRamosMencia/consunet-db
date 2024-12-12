import type { PrismaClient } from "@prisma/client";
import { IInfoInput } from "./types/infoInput";

export const permissionSeed = async (prisma: PrismaClient) => {
  try {
    const permissionsData: IInfoInput[] = [
      {
        code: "VIS",
        name: "Visualización",
      },
      {
        code: "EDI",
        name: "Edición",
      },
      {
        code: "ASI",
        name: "Asignación",
      },
    ];

    await prisma.permission.createMany({
      data: permissionsData,
    });

    console.log("Permission Seed completed.");
  } catch (error) {
    console.error(
      "An error has been ocurred on ===> permissionSeed.ts:\n",
      error
    );
  }
};
