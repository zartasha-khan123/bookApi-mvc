
const express = require("express");
const {getAllAuthors} = require("../controllers/authors.controller");
const { createAuthor } = require("../controllers/authors.controller");
const {updateAuthorById} = require("../controllers/authors.controller");
const {deleteAuthorById} = require("../controllers/authors.controller");
const {getAuthorValidateMiddleware,createAuthorValidateMiddleware,updateAuthorValidateMiddleware,deleteAuthorValidateMiddleware} = require("../middlewares/author.validation.middleware");

const router = express.Router();


//========================== GET all authors =============================//
// GET /api/v1/authors
// GET /api/v1/authors?search=zartasha
//use middleware for validation (getAuthorValidateMiddleware)
router.get("/",getAuthorValidateMiddleware,getAllAuthors);




//==========================create a author=============================//
// POST /api/v1/authors
// router.post("/",createAuthor);
// use middleware for validation (createAuthorValidateMiddleware)
router.post("/",createAuthorValidateMiddleware,createAuthor);


//==============================UPDATE (PATCH)==========================//
//patch/api/v1/authors/:id
//use middleware for validation (updateAuthorValidateMiddleware)
router.patch("/:id", updateAuthorValidateMiddleware, updateAuthorById)


//==========================DELETE Author============================//
router.delete("/:id", deleteAuthorValidateMiddleware, deleteAuthorById);

module.exports = router;