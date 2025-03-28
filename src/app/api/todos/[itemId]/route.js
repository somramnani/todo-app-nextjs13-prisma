import { deleteTodo } from "@/src/utils/deleteTodo";

export async function DELETE(request, { params }) {
  const { itemId } = params;
  try {
    const updatedTODO = await deleteTodo(parseInt(itemId));

    return new Response(JSON.stringify(updatedTODO), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error deleting todo", error);
    return new Response(JSON.stringify({ error: "Failed to delete todo" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
