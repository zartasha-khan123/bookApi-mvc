const express = require('express');

const {globalMiddleWare} = require("./controllers/middlewares/globalmiddleware");
const bookRoutes = require("./routes/books.route");

const app = express();

const PORT = 8000;

//-------------------------middlewares-------------------------

app.use(globalMiddleWare);

//-------------------------routes-------------------------

app.use("/", bookRoutes);


app.listen(PORT,()=>{
    console.log(`Server is running on port`)
})