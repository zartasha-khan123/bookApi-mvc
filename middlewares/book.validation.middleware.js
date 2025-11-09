
const {getBookValidator,createBookValidator, updateValidatorId, updateBookValidateBody,deleteBookValidatorId} = require("../validators/book.validatorSchema")


exports.getBookValidateMiddleware = (request,response,next)=>{
  try{
     getBookValidator.parse(request.query)
     next()
  }
  catch(error){
    return response.status(400).json({message:"Invalid request query parameters",errors:error.issues})
  }
}



//====================================CREATE validator Middleware ============================//
exports.createBookValidateMiddleware= (request,response,next)=>{
  try{

     createBookValidator.parse(request.body)
     next()
  }
  catch(error){
    return response.status(400).json({message:"Invalid request body parameters",errors:error.issues})
  }
}



//====================================UPDATE validator Middleware ============================//

exports.updateBookValidateMiddleware= (request,response,next)=>{

    
    try{
               updateValidatorId.parse(request.params)
               updateBookValidateBody.parse(request.body)
     next()
    }

    catch(error){

            return response.status(400).json({message:"Validation failed",errors:error.issues})
    }



}

//====================================DELETE validator Middleware ============================//

exports.deleteBookValidateMiddleware= (request,response,next)=>{
    try{
        deleteBookValidatorId.parse(request.params)
     next()
    }   
    catch(error){
            return response.status(400).json({message:"delete book failed",errors:error.issues})
    }   
}