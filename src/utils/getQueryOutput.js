import prisma from "./prismaClient";

export const queryAllData = async () => {
  try {
    const queryOutput = await prisma.todo.findMany();
    return queryOutput;
  } catch (error) {
    console.log(error);
  } finally {
    prisma.$disconnect();
  }
};

export const queryAllTodoItem = async () => {
  try {
    const queryOutput = await prisma.todo.findMany({
      select: {
        todo_item: true,
      },
    });
    return queryOutput;
  } catch (error) {
    console.log(error);
  } finally {
    prisma.$disconnect();
  }
};
