import type { PrismaClient } from "@prisma/client";
import { IProjectInput } from "./types/projectInput";
import { randIndex } from "./utils/randIndex";

export const projectSeed = async (prisma: PrismaClient) => {
  try {
    const owners = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
      },
      take: 10,
      where: {
        subscription_id: {
          not: null,
        },
      },
    });

    const connections = await prisma.connection.findMany({
      select: {
        id: true,
      },
    });

    const projectsData: IProjectInput[] = [];

    for (let i = 0; i < owners.length; i++) {
      const randProjects = randIndex(1, 3);

      for (let j = 0; j < randProjects; j++) {
        const connectionIdx = randIndex(0, connections.length - 1);

        projectsData.push({
          code: `PRO-${i}-${j}`,
          connection_id: connections[connectionIdx].id,
          name: `proyecto-${owners[i].username}-${j}`,
          user_id: owners[i].id,
        });
      }
    }

    await prisma.project.createMany({
      data: projectsData,
    });

    console.log("Project seed completed.");
  } catch (error) {
    console.error("An error has been ocurred on ===> projectSeed.ts:\n", error);
  }
};
