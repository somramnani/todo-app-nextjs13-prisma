import prisma from "./prismaClient";

export const deleteTodo = async (id) => {
  try {
    const result = await prisma.todo.delete({
      where: {
        id: id,
      },
    });
    return result;
  } catch (error) {
    console.error("Error deleting todo:", error);
    return error;
  }
};
