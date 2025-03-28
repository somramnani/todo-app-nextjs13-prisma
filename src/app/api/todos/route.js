import { createTodo } from "@/src/utils/createTodo";
import { queryAllData } from "@/src/utils/getQueryOutput";

export async function POST(request) {
  try {
    const { todo_item } = await request.json();
    if (!todo_item) {
      return new Response(
        JSON.stringify({ message: "No todo item provided" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const newTodo = await createTodo(todo_item);

    return new Response(JSON.stringify(newTodo), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating todo:", error);
    return new Response(JSON.stringify({ error: "Failed to create todo" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function GET() {
  try {
    const todos = await queryAllData();

    if (!todos || todos.length === 0) {
      return new Response(JSON.stringify({ message: "No todos found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(todos), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching todos:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch todos" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
