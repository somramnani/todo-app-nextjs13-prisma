import prisma from "./prismaClient";

export const updateTodo = async (id, updateTodo) => {
  try {
    const results = await prisma.todo.update({
      where: {
        id: id,
      },
      data: {
        todo_item: updateTodo,
      },
    });
    return results;
  } catch (error) {
    return error;
  }
};
