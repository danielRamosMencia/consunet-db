import type { PrismaClient } from "@prisma/client";
import { IActivityInput } from "./types/activityInput";

export const activitySeed = async (prisma: PrismaClient) => {
  try {
    const activitiesData: IActivityInput[] = [
      {
        code: "NAV",
        max_consumption: 3.0,
        min_consumption: 1.0,
        name: "Navegación web",
      },
      {
        code: "MUS",
        max_consumption: 2.0,
        min_consumption: 1.0,
        name: "Música (Streaming de música)",
      },
      {
        code: "CHA",
        max_consumption: 6.0,
        min_consumption: 3.0,
        name: "Chat de vídeo personal",
      },
      {
        code: "TSD",
        max_consumption: 9.0,
        min_consumption: 6.0,
        name: "Transmisión de vídeo SD",
      },
      {
        code: "THD",
        max_consumption: 15.0,
        min_consumption: 10.0,
        name: "Transmisión de vídeo HD",
      },
      {
        code: "VSD",
        max_consumption: 8.0,
        min_consumption: 5.0,
        name: "Visualización de vídeo SD",
      },
      {
        code: "VHD",
        max_consumption: 14.0,
        min_consumption: 9.0,
        name: "Visualización de vídeo HD",
      },
      {
        code: "VCO",
        max_consumption: 8.0,
        min_consumption: 5.0,
        name: "Vídeo conferencia",
      },
      {
        code: "DEP",
        max_consumption: 3.0,
        min_consumption: 1.0,
        name: "Descarga de archivos pequeños",
      },
      {
        code: "DEG",
        max_consumption: 3.0,
        min_consumption: 1.0,
        name: "Descarga de archivos grandes",
      },
      {
        code: "JUG",
        max_consumption: 3.0,
        min_consumption: 1.0,
        name: "Jugar Online",
      },
    ];

    await prisma.activity.createMany({
      data: activitiesData,
    });

    console.log("Activity seed completed.");
  } catch (error) {
    console.error(
      "An error has been ocurred on ===> activitySeed.ts:\n",
      error
    );
  }
};
