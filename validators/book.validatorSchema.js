const {z} = require("zod");

//=====================GET validator Schema

//+++++++++++request.query

exports.getBookValidator = z.object({
    search:z.string().min(4).optional(),

    bookId:z.string().optional(),

    authorId:z.string().optional()
})
