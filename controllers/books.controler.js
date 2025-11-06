const db = require("../db/connection-db")
const bookTable = require("../models/book.model")
const authorTable = require("../models/author.model")
const { sql, eq } = require("drizzle-orm");

//==========================GET all books (ak he url say get main id,title,authorid get)================================================//
exports.getAllBooks = async (request, response) => {

    try {
        const { search, bookId, authorId } = request.query

        let query = db.select().from(bookTable)

        //Search by Title
        if (search) {
            query = query.where(sql`to_tsvector('english', ${bookTable.title}) @@ plainto_tsquery('english', 
            ${search})`);
        }


        //search By ID
        if (bookId) {
            query = query.where(eq(bookTable.id, bookId))
        }


        //search by author Id
        if (authorId) {
            query = query.where(eq(bookTable.authorId, authorId))
        }


        const result = await query


        return response.status(200).json({ message: "Book Fetched Successfully", result: result })


    }

    catch (error) {
        console.log("Error fetching books:", error);
        return response.status(500).json({ message: "Server Error"})
       

    }
}




//============================================ alag alag book id , title , =============================//        
exports.getBookById = async (request, response) => {

    const clientId = request.params.id
    console.log("Client ID:", clientId);


    const result = await db.select().from(bookTable).where(eq(bookTable.id, clientId)).limit(1);



    console.log("Book by ID:", result);
    response.json({ ApiResponse: result })

}
//  ============================================ GET book by title =============================//
exports.getBookByTitle = async (request, response) => {
    console.log("Get book by title called");

    const booktitle = await request.query.booktitle

    const result = await db.select().from(bookTable).where(sql`to_tsvector('english', ${bookTable.title}) @@ plainto_tsquery('english', ${booktitle})`);




    console.log("Book by ID:", result);
    response.json({ APiResponse: result })
}


//-------------------------------------------------- CREATE -----------------------//

exports.createBook = async (request, response) => {

   try{
     const { title, description, authorId } = request.body
   
    // add validation later
    if(!title || !description || !authorId){
        return response.status(400).json({message:"title, description and authorId are required (is missing)"})
    }
    // check if author exists
     const authorExists = await db.select().from(authorTable).where(eq(authorTable.id, authorId)).limit(1)
    
     if(authorExists.length === 0 ){
        return response.status(400).json({message:"Author does not exist"})
     }

    const result = await db.insert(bookTable).values({
        title: title,         // db wala title aur ak postman wala
        description: description,
        authorId: authorId
    })
        .returning()          //return id property 

           return response.status(201).json({ message: "Book Created Successfully", result: result })



   }
     catch(error){
         console.log("Error creating books:", error);
        return response.status(500).json({ message: "Server Error", error: error.message })

     }

}



// -----------------------------------DELETE---------------------------------------------//


exports.deleteBookById = async (request, response) => {

    try{
        
    const deleteId = request.params.id
    const deleteBook = await db.delete(bookTable).where(eq(bookTable.id, deleteId)).returning();

    if(!deleteBook.length === 0 ){
        return response.status(404).json({message:"Book not found"})
    }

    response.status(200).json({ message: "Book Deleted Successfully!", deleteBook })

    }
    catch(error){
        return response.status(500).json({
            message: "Server Error",
            error: error.message
        });
    }
}



// -----------------------------------UPDATE-------------------------------------------//

exports.updateBookById = async (request, response) => {

    try {
        const updateById = request.params.id

        const { title, description, authorId } = request.body

        const updateResponse = await db.update(bookTable).set({ title, description, authorId })
            .where(eq(bookTable.id, updateById))
            .returning();

        if (!updateResponse) {
            response.status(400).json({ message: "Book not found" })
        }


        response.json({
            message: "Book Updated Successfully",
            book: updateResponse[0]
        })
    }
    catch (error) {
        return response.status(500).json({
            message: "Server Error",
            error: error.message
        });


    }

}
