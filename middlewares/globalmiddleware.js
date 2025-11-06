exports.globalMiddleWare = (request,response,next)=>{
    console.log(`🕓 Date : ${new Date().toISOString()} - Method :  ${request.method} - Path : ${request.path}`);
    next()
}
