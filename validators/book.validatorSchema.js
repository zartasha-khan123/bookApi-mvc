const {z} = require("zod");

//=====================GET validator Schema

//+++++++++++request.query

exports.getBookValidator = z.object({
    search:z.string().min(4).optional(),

    bookId:z.string().optional(),

    authorId:z.string().optional()
})



//=====================CREATE validator Schema

//+++++++++++request.body
//const {title, description, authorId}=request.body
exports.createBookValidator = z.object({

    title:z.string({required_error:"Title is required",}).min(3,{message:"Title should be at least 3 characters long"}),
    description:z.string().optional(),
    authorId:z.uuid()


})


//=====================UPDATE validator Schema
//==================request.params.id
exports.updateValidatorId= z.object({

    //const updateById = request.params.id

       id:z.uuid()
})
     
 //==================request.body
exports.updateValidatorBody= z.object({

   title:z.string().optional(),
    description:z.string().optional(),
    authorId:z.uuid().optional()

})


//=====================DELETE validator Schema
//==================request.params.id
exports.deleteBookValidatorId= z.object({
    id:z.uuid()
})  

