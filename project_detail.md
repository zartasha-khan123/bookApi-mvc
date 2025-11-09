
# Project: bookApi-mvc

This is a Node.js Express application that provides a RESTful API for managing books and authors. It follows the Model-View-Controller (MVC) architectural pattern.

## Project Structure

The project is structured as follows:

```
├── controllers
│   ├── authors.controller.js
│   └── books.controler.js
├── db
│   └── connection-db.js
├── drizzle
├── middlewares
│   ├── author.validation.middleware.js
│   ├── book.validation.middleware.js
│   └── globalmiddleware.js
├── models
│   ├── author.model.js
│   ├── book.model.js
│   └── index.js
├── routes
│   ├── authors.route.js
│   └── books.route.js
├── validators
│   ├── author.validatorSchema.js
│   └── book.validatorSchema.js
├── .gitignore
├── analyze.md
├── docker-compose.yaml
├── drizzle.config.js
├── index.js
├── package-lock.json
└── package.json
```

### Key Files and Directories

*   **`index.js`**: The main entry point of the application. It sets up the Express server, middleware, and routes.
*   **`routes/`**: This directory contains the route definitions for the API.
    *   `authors.route.js`: Defines the routes for author-related operations (e.g., `GET /authors`, `POST /authors`).
    *   `books.route.js`: Defines the routes for book-related operations (e.g., `GET /books`, `POST /books`).
*   **`controllers/`**: This directory contains the controllers that handle the business logic for each route.
    *   `authors.controller.js`: Contains the logic for creating, reading, updating, and deleting authors.
    *   `books.controler.js`: Contains the logic for creating, reading, updating, and deleting books.
*   **`models/`**: This directory contains the database models.
    *   `author.model.js`: Defines the schema for the `authors` table.
    *   `book.model.js`: Defines the schema for the `books` table.
*   **`db/`**: This directory contains the database connection logic.
    *   `connection-db.js`: Establishes a connection to the PostgreSQL database using `drizzle-orm`.
*   **`middlewares/`**: This directory contains the middleware functions.
    *   `author.validation.middleware.js`: Contains middleware for validating author-related requests.
    *   `book.validation.middleware.js`: Contains middleware for validating book-related requests.
    *   `globalmiddleware.js`: Contains global middleware for the application.
*   **`validators/`**: This directory contains the validation schemas.
    *   `author.validatorSchema.js`: Defines the validation rules for author data using `zod`.
    *   `book.validatorSchema.js`: Defines the validation rules for book data using `zod`.
*   **`drizzle.config.js`**: The configuration file for `drizzle-kit`, which is used for database migrations.
*   **`docker-compose.yaml`**: The Docker Compose file for setting up a PostgreSQL database container.
*   **`package.json`**: The project's manifest file, which lists the dependencies and scripts.

## API Endpoints

The API provides the following endpoints:

### Authors

*   `GET /api/v1/authors`: Get all authors.
*   `GET /api/v1/authors?search=<search_term>`: Search for authors by first name, last name, or email.
*   `POST /api/v1/authors`: Create a new author.
*   `PATCH /api/v1/authors/:id`: Update an author by ID.
*   `DELETE /api/v1/authors/:id`: Delete an author by ID.

### Books

*   `GET /api/v1/books`: Get all books.
*   `GET /api/v1/books?search=<search_term>`: Search for books by title.
*   `GET /api/v1/books?bookId=<book_id>`: Get a book by ID.
*   `GET /api/v1/books?authorId=<author_id>`: Get all books by a specific author.
*   `POST /api/v1/books`: Create a new book.
*   `PATCH /api/v1/books/:id`: Update a book by ID.
*   `DELETE /api/v1/books/:id`: Delete a book by ID.

## Dependencies

The project uses the following dependencies:

*   **`express`**: A fast, unopinionated, minimalist web framework for Node.js.
*   **`drizzle-orm`**: A TypeScript ORM for SQL databases.
*   **`pg`**: A PostgreSQL client for Node.js.
*   **`zod`**: A TypeScript-first schema declaration and validation library.
*   **`dotenv`**: A zero-dependency module that loads environment variables from a `.env` file into `process.env`.

## Setup and Installation

To run this project, you will need to have Node.js, npm, and Docker installed.

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    ```

2.  **Install the dependencies:**

    ```bash
    npm install
    ```

3.  **Start the PostgreSQL database:**

    ```bash
    docker-compose up -d
    ```

4.  **Create a `.env` file** in the root of the project with the following content:

    ```
    DATABASE_URL=postgres://postgres:admin@localhost:5432/bookApi-store
    ```

5.  **Run the database migrations:**

    ```bash
    npx drizzle-kit generate
    ```

6.  **Start the application:**

    ```bash
    npm start
    ```

The application will be running on `http://localhost:8000`.
