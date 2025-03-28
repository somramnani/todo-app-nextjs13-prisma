import prisma from "../utils/prismaClient";

export const createTodo = async (data) => {
  try {
    const results = await prisma.todo.create({
      data: {
        todo_item: data,
      },
    });

    return results;
  } catch (error) {
    console.log(error);
  }
};
