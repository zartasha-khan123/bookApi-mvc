const {z} = require("zod");

//=====================GET validator Schema

//+++++++++++request.query

exports.getAuthorValidator = z.object({

    search:z.string().min(3).optional(),    
    id:z.string().optional(),
    email:z.string().email().optional()
})

//=====================CREATE validator Schema
//+++++++++++request.body

exports.createAuthorValidator = z.object({

    firstName:z.string().min(3,{message:"First name should be at least 3 characters long"}),
    email:z.email({message:"Invalid email address"}).optional(),
    lastName:z.string().min(10,{message:"Last name should be at least 10 characters long"}).optional()
})


//=====================UPDATE validator Schema
//+++++++++++request.params

exports.updateAuthorValidatorId = z.object({

    id:z.uuid({message:"Invalid author ID"})
}
)
//+++++++++++request.body===============//
exports.updateAuthorValidatorBody = z.object({

    firstName:z.string().min(3,{message:"First name should be at least 3 characters long"}).optional(),
    email:z.email({message:"Invalid email address"}).optional(),
    lastName:z.string({message:"Last name should be at least 10 characters long"}).optional()
})


//====================================DELETE validator Schema

//+++++++++++request.params

exports.deleteAuthorValidatorId = z.object({

    id:z.uuid({message:"Invalid author ID"})
})