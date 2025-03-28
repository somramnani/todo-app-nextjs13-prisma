import { deleteTodo } from "@/src/utils/deleteTodo";
import { updateTodo } from "@/src/utils/updateTodo";

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

// export async function DELETE({ params }) {
//   console.log("congrats you have reached this route!");
// }

export async function PUT(request, { params }) {
  console.log("congrats you ahve reached the PUT route!");
  const { itemId } = params;
  const { updated_prompt } = await request.json();

  console.log({
    ID: itemId,
    updated_prompt: updated_prompt,
  });

  try {
    const updateTODO = await updateTodo(parseInt(itemId), updated_prompt);

    return new Response(JSON.stringify(updateTODO), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error deleting todo", error);
    return new Response(JSON.stringify({ error: "Failed to update todo" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
