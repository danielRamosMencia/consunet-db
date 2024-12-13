import type { PrismaClient } from "@prisma/client";
import { IDevicesOnProjectInput } from "./types/devicesOnProjectInput";
import { randIndex } from "./utils/randIndex";

export const devicesOnProjectSeed = async (prisma: PrismaClient) => {
  try {
    const projects = await prisma.project.findMany({
      select: {
        id: true,
      },
    });
    const devices = await prisma.device.findMany({
      select: {
        id: true,
      },
    });
    const activities = await prisma.activity.findMany({
      select: {
        id: true,
      },
    });

    const deviceOnProjectData: IDevicesOnProjectInput[] = [];

    for (let i = 0; i < projects.length; i++) {
      const devicesAmount = randIndex(1, 5);

      for (let j = 0; j < devicesAmount; j++) {
        const randActivity = randIndex(0, activities.length - 1);
        const randDevice = randIndex(0, devices.length - 1);

        deviceOnProjectData.push({
          activity_id: activities[randActivity].id,
          device_id: devices[randDevice].id,
          project_id: projects[i].id,
        });
      }
    }

    await prisma.devicesOnProject.createMany({
      data: deviceOnProjectData,
    });

    console.log("Devices on project seed completed.");
  } catch (error) {
    console.error(
      "An error has been ocurred on ===> devicesOnProjectSeed.ts:\n",
      error
    );
  }
};
