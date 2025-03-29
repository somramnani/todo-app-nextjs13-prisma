# Todo List App - Next.js Prisma

This is a simple Todo List application built using Next.js with the App Router and Prisma for database management. It allows users to Create, Read, Update, and Delete tasks efficiently.

## Features

- Add new tasks
- Edit existing tasks
- Delete tasks
- Persist data using Prisma with a PostgreSQL database

## Technologies Used

- **Next.js** (App Router)
- **Prisma** (ORM for database management)
- **PostgreSQL** (or any other Prisma-supported database)

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (latest LTS version recommended)
- PostgreSQL
- Yarn or npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/somramnani/todo-app-nextjs13-prisma.git
   cd nextjs-app-router-todo
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Database Setup

1. Copy the example environment file and update the variables:
   ```bash
   cp .env.example .env
   ```
2. Update the `.env` file with your database URL:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/todoapp"
   ```
3. Run Prisma migrations:
   ```bash
   npx prisma migrate dev --name init
   ```
4. Generate Prisma client:
   ```bash
   npx prisma generate
   ```

### Running the App

Start the development server:

```bash
npm run dev
# or
yarn dev
```

### Deploying

For deployment, ensure the production database is configured and use:

```bash
npm run build
npm start
```

## API Routes

- `GET /api/todos` - Fetch all todos
- `POST /api/todos` - Add a new todo
- `PUT /api/todos/:id` - Update a todo
- `DELETE /api/todos/:id` - Delete a todo

### GET

```
// GET /api/todos
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
```

### POST

```
// POST /api/todos
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
```

### PUT

```
// PUT /api/todos/:id
export async function PUT(request, { params }) {
  const { itemId } = params;
  const { updated_prompt } = await request.json();

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
```

### DELETE

```
// DELETE /api/todos/:id
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
```
