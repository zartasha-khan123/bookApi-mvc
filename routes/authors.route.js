
const express = require("express");
const {getAllAuthors} = require("../controllers/authors.controller");
const { createAuthor } = require("../controllers/authors.controller");
const {updateAuthorById} = require("../controllers/authors.controller");
const {deleteAuthorById} = require("../controllers/authors.controller");

const router = express.Router();


//========================== GET all authors =============================//
// GET /api/v1/authors
// GET /api/v1/authors?search=zartasha
router.get("/",getAllAuthors);




//==========================create a author=============================//
// POST /api/v1/authors
// router.post("/",createAuthor);

router.post("/", createAuthor);


//==============================UPDATE (PATCH)==========================//
//patch/api/v1/authors/:id

router.patch("/:id", updateAuthorById)


//==========================DELETE Author============================//
router.delete("/:id", deleteAuthorById);

module.exports = router;