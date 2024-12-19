
# Todo List App - Backend

This is the backend API for the Todo List App, built with **Express.js** and **Prisma**, and using **MySQL** as the database. It provides RESTful endpoints for CRUD operations on tasks.

---

## Features

- Add, edit, delete, and fetch tasks.
- Pagination for task listing.
- Handles large task lists efficiently.
- Secure and scalable backend architecture.

---

## Technologies Used

- **Express.js**
- **TypeScript**
- **Prisma ORM**
- **MySQL**

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [MySQL](https://www.mysql.com/) (v8 or higher)

### Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/daniJdev/Express.js-API.git
   cd Express.js-API
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   - Create a `.env` file in the root directory.
   - Add the following configuration:
     ```
     DATABASE_URL=mysql://<USER>:<PASSWORD>@localhost:3306/todo_db
     PORT=5000
     FRONTEND_URL=http://localhost:3000
     ```

4. Set up the database:
   - Ensure MySQL is running and a database named `todo_db` exists.
   - Run the Prisma migrations:
     ```bash
     npx prisma migrate dev --name init
     ```

5. Start the server:
   ```bash
   npm run dev
   ```

6. Test the API:
   - The server will be running on [http://localhost:5000](http://localhost:5000).
   - Use tools like Postman or curl to test the following endpoints:
     - `GET /api/tasks`
     - `POST /api/tasks`
     - `PUT /api/tasks/:id`
     - `DELETE /api/tasks/:id`

---

## Deployment

To run the backend in production:
1. Compile TypeScript to JavaScript:
   ```bash
   npm run build
   ```

2. Start the server:
   ```bash
   npm start
   ```

---

## Project Structure

```plaintext
.
├── src/
│   ├── controllers/   # API logic (e.g., taskController.ts)
│   ├── prisma/        # Prisma client and schema
│   ├── routes/        # Express routes
│   └── index.ts       # Entry point
├── prisma/            # Prisma schema and migrations
└── .env               # Environment variables
```
