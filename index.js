const express = require('express');

const {globalMiddleWare} = require("./middlewares/globalmiddleware");
const bookRoutes = require("./routes/books.route");
const { timestamp } = require('drizzle-orm/gel-core');
const authorRoutes = require("./routes/authors.route");

const app = express();

const PORT = 8000;

//-------------------------middlewares-------------------------

app.use(express.json())
app.use(globalMiddleWare);


//-----------------------health check----------------------------

app.get("/", (request,response)=>{

    response.status(200).json({
        success : true ,
        message : "Book store Api",
        version : "1.0.0",
        endpoints : {
            health:"/health",
            books:"/api/v1/books",
            author:"/api/v1/author"
        }
    })
})



app.get("/health", (request,response)=>{
    response.status(200).json({
        success:true,
        message:"Server is healthy",
        timestamp:new Date().toISOString()
    })
})



//-------------------------book routes-------------------------

app.use("/api/v1/books", bookRoutes);


//-------------------------author routes-------------------------
app.use("/api/v1/authors", authorRoutes);



app.listen(PORT,()=>{
    console.log(`Server is running on port - 8000`)
})