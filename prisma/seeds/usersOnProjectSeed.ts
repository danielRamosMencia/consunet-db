import type { PrismaClient } from "@prisma/client";
import { IUsersOnProjectInput } from "./types/usersOnProjectInput";
import { randIndex } from "./utils/randIndex";

export const usersOnProjectsSeed = async (prisma: PrismaClient) => {
  try {
    const projects = await prisma.project.findMany({
      select: {
        id: true,
        user_id: true,
      },
      take: 5,
    });

    const users = await prisma.user.findMany({
      select: {
        id: true,
      },
    });

    const permissions = await prisma.permission.findMany({
      select: {
        id: true,
      },
    });

    const usersOnProjectData: IUsersOnProjectInput[] = [];

    let idx = 0;

    while (idx < projects.length) {
      const idxUser = randIndex(0, users.length - 1);

      if (projects[idx].user_id === users[idxUser].id) {
        continue;
      } else {
        const idxPermission = randIndex(0, permissions.length - 1);

        usersOnProjectData.push({
          permission_id: permissions[idxPermission].id,
          project_id: projects[idx].id,
          user_id: users[idxUser].id,
        });

        idx++;
      }
    }

    await prisma.usersOnProject.createMany({
      data: usersOnProjectData,
    });

    console.log("Users on project seed completed.");
  } catch (error) {
    console.error(
      "An error has been ocurred on ===> usersOnProjectsSeed.ts:\n",
      error
    );
  }
};
