const db = require("../db/connection-db")
const { ilike, or, eq } = require("drizzle-orm");
const authorTable = require("../models/author.model")
const bookTable = require("../models/book.model");


exports.getAllAuthors = async (request, response) => {
    // logic to get all authors

    try{

    const { search, id, email } = request.query

    const query = db.select().from(authorTable)

    if (id) {
        query.where(eq(authorTable.id, id))
    }

    else if (search) {
        query.where(or(ilike(authorTable.firstName, `%${search}%`),
            ilike(authorTable.lastName, `%${search}%`),
            ilike(authorTable.email, `%${search}%`)
        ))


    }
    else if (email) {
        query.where(eq(authorTable.email, email))


    }

    const result = await query
    return response.status(200).json({ message: "Authors fetched successfully", result: result })


}

   catch(error){
    console.log("Error fetching authors:", error);
    return response.status(500).json({ message: "Error fetching authors" })
   }
}



/////////===========================CREATE AUTHOR=============================//////////

exports.createAuthor = async (request, response) => {

    const {firstName,lastName,email} = request.body

   
 const result =await db.insert(authorTable).values( {firstName,lastName,email}).returning()

 return response.status(201).json({message:"Author Created!!!", result:result})

}

//====================================UPDATE Author=====================================//


exports.updateAuthorById = async(request,response)=>{

    try{
    const {id} = request.params  //because /:id // using params

    const {firstName,lastName,email} = request.body

    

        const updateResponse = await db.update(authorTable).set({ firstName,lastName,email})
            .where(eq(authorTable.id,id ))
            .returning();

        if (!updateResponse) {
            response.status(400).json({ message: "No fields to Update" })
        }


        response.json({
            message: "Author Id Updated Successfully",
            author: updateResponse[0]
        })
    }

    catch (error) {
        return response.status(500).json({
            message: "Server Error",
            error: error.message
        });


    }

}


//====================================DELETE Author=====================================//

exports.deleteAuthorById= async(request,response)=>{
    try{
        
        const {id} =request.params

        const books = await db.select().from(bookTable).where(eq(bookTable.authorId,id))

        if(books.length > 0){
            return response.status(400).json({message:"cannot delete author with existing books, delete books first"})

        }

        const deleteAuthor = await db.delete(authorTable).where(eq(authorTable.id,id)).returning();
        response.status(200).json({message:"Author Deleted Successfully!", deleteAuthor})
    }

    catch(error){
        return response.status(500).json({
            message: "Error deleting author",
            error: error.message
        });
    }
}