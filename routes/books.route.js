const express = require('express');
const {getAllBooks, getBookById, getBookByTitle, createBook , deleteBookById, updateBookById}=require("../controllers/books.controler");
const {getBookValidateMiddleware, createBookValidateMiddleware, deleteBookValidateMiddleware, updateBookValidateMiddleware} = require("../middlewares/book.validation.middleware")
const router = express.Router()

//GET all books this apis
//GET /api/v1/books
//GET /api/v1/books?search=book1
//GET /api/v1/books?authorId=12345567788
//GET /api/v1/books?bookid=1234567888
router.get("/",getBookValidateMiddleware ,getAllBooks);          // ye individual kay leye hain 
router.get("/title", getBookByTitle);  // ye title kay leye hain individual
router.get("/:id",getBookById);       // ye id kay leye hain individual



// create new book // post /api/v1/books
router.post("/",createBookValidateMiddleware,createBook)



// delete existing data // DELETE /api/v1/books/:id
router.delete("/:id",deleteBookValidateMiddleware ,deleteBookById)

// update existing data //   PATCH /api/v1/books/:id
router.patch("/:id", updateBookValidateMiddleware,updateBookById)

module.exports = router;