const express = require('express');
const {getAllBooks}=require("../controllers/books.controler");
const { get } = require('http');

const router = express.Router()

router.get("/", getAllBooks);

module.exports = router;