import { type PrismaClient } from "@prisma/client";
import { IInfoInput } from "./types/infoInput";

export const roleSeed = async (prisma: PrismaClient) => {
  try {
    const rolesData: IInfoInput[] = [
      {
        code: "ADM",
        name: "Administrador",
      },
      {
        code: "CLI",
        name: "Cliente",
      },
    ];

    await prisma.role.createMany({
      data: rolesData,
    });

    console.log("Role seed completed.");
  } catch (error) {
    console.error("An error has been ocurred on ===> roleSeed.ts:\n", error);
  }
};
