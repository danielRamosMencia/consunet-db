import type { PrismaClient } from "@prisma/client";
import { IInfoInput } from "./types/infoInput";

export const subscriptionSeed = async (prisma: PrismaClient) => {
  try {
    const subscriptionsData: IInfoInput[] = [
      {
        code: "ORO",
        name: "Oro",
      },
      {
        code: "PLA",
        name: "Plata",
      },
      {
        code: "BRO",
        name: "Bronce",
      },
    ];

    await prisma.subscription.createMany({
      data: subscriptionsData,
    });

    console.log("Subscription seed completed.");
  } catch (error) {
    console.error(
      "An error has been ocurred on ===> subscriptionSeed.ts:\n",
      error
    );
  }
};
