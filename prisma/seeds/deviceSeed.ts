import type { PrismaClient } from "@prisma/client";
import { IInfoInput } from "./types/infoInput";

export const deviceSeed = async (prisma: PrismaClient) => {
  try {
    const devicesData: IInfoInput[] = [
      {
        code: "SMA",
        name: "Smartphone",
      },
      {
        code: "LAP",
        name: "Laptop",
      },
      {
        code: "PCE",
        name: "PC de escritorio",
      },
      {
        code: "STV",
        name: "SmartTV",
      },
      {
        code: "TAB",
        name: "Tablet",
      },
    ];

    await prisma.device.createMany({
      data: devicesData,
    });

    console.log("Device seed completed.");
  } catch (error) {
    console.error("An error has been ocurred on ===> deviceSeed.ts:\n", error);
  }
};
