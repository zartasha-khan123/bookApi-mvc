
const {getAuthorValidator, createAuthorValidator,updateAuthorValidatorId,updateAuthorValidatorBody,deleteAuthorValidatorId}=require("../validators/author.validatorSchema")

//====================================GET validator Middleware ============================//
exports.getAuthorValidateMiddleware = (request,response,next)=>{
  try{
     getAuthorValidator.parse(request.query)
     next()
  }
  catch(error){
    return response.status(400).json({message:"Invalid request query parameters",errors:error.issues})
  }
}


//====================================CREATE validator Middleware ============================//

exports.createAuthorValidateMiddleware= (request,response,next)=>{
     try{
     createAuthorValidator.parse(request.body)
     next()
  }
  catch(error){
    return response.status(400).json({message:"Invalid request body parameters",errors:error.issues})
  }
}


//====================================UPDATE validator Middleware ============================//

exports.updateAuthorValidateMiddleware= (request,response,next)=>{


    try{
        updateAuthorValidatorId.parse(request.params)
        updateAuthorValidatorBody.parse(request.body)
     next()
    }


    catch(error){

            return response.status(400).json({message:"Validation failed",errors:error.issues})
    }   
}


//====================================DELETE validator Middleware ============================//

exports.deleteAuthorValidateMiddleware= (request,response,next)=>{

    try{
        deleteAuthorValidatorId.parse(request.params)
     next()
    }

    catch(error){
            return response.status(400).json({message:"delete author failed",errors:error.issues})
    }
}