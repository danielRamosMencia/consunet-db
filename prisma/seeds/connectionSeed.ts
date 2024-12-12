import type { PrismaClient } from "@prisma/client";
import { IInfoInput } from "./types/infoInput";

export const connectionSeed = async (prisma: PrismaClient) => {
  try {
    const connectionsData: IInfoInput[] = [
      {
        code: "CAB",
        name: "Cableado",
      },
      {
        code: "WIF",
        name: "Wi-fi",
      },
      {
        code: "FIB",
        name: "Fibra óptica",
      },
      {
        code: "INA",
        name: "Inalámbrico",
      },
    ];

    await prisma.connection.createMany({
      data: connectionsData,
    });

    console.log("Connection seed completed.");
  } catch (error) {
    console.error(
      "An error has been ocurred on ===> connectionSeed.ts:\n",
      error
    );
  }
};
