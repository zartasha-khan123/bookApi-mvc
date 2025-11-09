# bookApi-mvc

A simple Node.js + Express + PostgreSQL REST API project using Drizzle ORM, for managing books and authors (MVC architecture).

---

## 🧰 Features

- RESTful CRUD endpoints for *Books* and *Authors*.  
- Relationship: Each book has an author (authorId).  
- Basic validation (required fields) before insertion/updation.  
- PostgreSQL database, accessed via Drizzle ORM (`drizzle-orm`).  
- MVC folder structure (`models/`, `controllers/`, `routes/`, `middlewares/`).  
- Environment configuration using `.env`.  
- Error handling (not found, server error, validation errors).  

---

## 🚀 Getting Started

### Prerequisites

Make sure you have:

- Node.js (v14 or higher)  
- npm (comes with Node)  
- PostgreSQL database set up  
- `psql` or any GUI tool to create database/tables  

### Installation & Setup

1. Clone the repository  
   ```bash
   git clone https://github.com/zartasha-khan123/bookApi-mvc.git
   cd bookApi-mvc
Install dependencies

bash
Copy code
npm install
Create a .env file in the project root, and add your database URL / config. Example:

env
Copy code
DATABASE_URL=postgresql://username:password@localhost:5432/mydatabase
PORT=8000
Ensure your database has the required tables (authors, books) corresponding to the Drizzle schema definitions in models/. If you use migrations (or Drizzle’s kit) then run:

bash
Copy code
npx drizzle-kit generate
npx drizzle-kit push
Run the server

bash
Copy code
npm start
The server should be running at:
http://localhost:8000

📦 API Endpoints
Authors
Method	URL	Description
GET	/authors	Get all authors
GET	/authors/:id	Get author by ID
POST	/authors	Create new author (body: firstName, lastName, email)
DELETE	/authors/:id	Delete author by ID (only if no books exist)

Books
Method	URL	Description
GET	/books	Get all books
GET	/books/:id	Get book by ID
GET	/books/title?booktitle=..	Get book(s) by title query
POST	/books	Create new book (body: title, description, authorId)
PATCH	/books/:id	Update existing book
DELETE	/books/:id	Delete book by ID

Note: Replace :id with actual UUID (or your table’s ID format) when performing requests.

🧪 Example Requests
Create Author

bash
Copy code
POST http://localhost:8000/authors
Content-Type: application/json

{
  "firstName": "Taha",
  "lastName": "Ahmed",
  "email": "taha.ahmed@example.com"
}
Get Book by Title

bash
Copy code
GET http://localhost:8000/books/title?booktitle=Harry Potter
✔️ Validations & Error Handling
For required fields: if firstName, lastName, or email is missing → returns 400 Bad Request with message.

For book deletion: cannot delete author with existing books → returns 400 with message "cannot delete author with existing books, delete books first"

For not found resources: returns 404 with message e.g. "Book not found"

For server errors: returns 500 with error message.

🧱 Project Structure
bash
Copy code
bookApi-mvc/
│
├── models/                  # Database schema definitions (Drizzle ORM)
├── controllers/             # Business logic & request handlers
├── routes/                  # Express route definitions
├── middlewares/             # Middleware (validation, global logging, etc.)
├── db/                      # Database connection & setup
├── .env                     # Environment variables (ignored in Git)
├── index.js                 # Entry point (Express server setup)
├── package.json             # NPM dependencies & scripts
└── README.md                # This file
🤝 Contributing
Contributions are welcome! Feel free to:

Submit issues if you find bugs or missing features

Fork the repo, make changes, and open Pull Requests

Upgrade dependencies, add tests, or improve logic

Please ensure your changes follow the project’s coding style and include needed documentation.

📄 License
Specify your license here. If no license file is present, you may add something like:

php-template
Copy code
MIT License

© 2025 <Your Name>
🎉 Acknowledgements
Thanks to the Node.js & Express community for excellent tools and libraries

The drizzle-orm team for providing a modern ORM for PostgreSQL

Anyone who contributes or gives feedback to this project

Enjoy building & using bookApi-mvc!

