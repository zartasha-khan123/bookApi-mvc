
const {getBookValidator} = require("../validators/book.validatorSchema")
exports.getBookValidateMiddleware = (request,response,next)=>{
  try{
     getBookValidator.parse(request.query)
     next()
  }
  catch(error){
    return response.status(400).json({message:"Invalid request query parameters",errors:error.issues})
  }
}