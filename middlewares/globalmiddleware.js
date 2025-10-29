exports.globalMiddleWare = (request,response,next)=>{
    console.log("I am global middleware");
    next()
}
