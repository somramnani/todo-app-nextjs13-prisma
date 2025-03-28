import prisma from "./prismaClient";

export const updateTodo = async (id, updateTodo) => {
  try {
    const results = await prisma.todo.update({
      where: {
        id: 32,
      },
      data: {
        todo_item: "Shower",
      },
    });
    return results;
  } catch (error) {
    return error;
  }
};
