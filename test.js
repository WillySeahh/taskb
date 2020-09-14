var assert = require("assert");
let chai = require("chai");
let chaiHttp = require("chai-http");
let server=require("./server");
let should = chai.should();



chai.use(chaiHttp);
describe("Quotes", function(){
    /*
    describe ("DELETE ALL", function(){
        it("should remove all first", done=>{
            console.log ("Deleting all data in db first.")
            chai.request(server)
                .delete("/api/quotes/")
                .send({})
                .end((err,res)=>{
                    //console.log (res)
                    // console.log("err",err);
                    res.should.have.status(200);
                    console.log("Response Body:", res.body);
                    // console.log (result);
                    done()
                })
        })

    })
    */
    
    
    describe ("CRUD OPERATIONS", function(){

        var books = [{
            "id" : "1",
            "title": "node tut 5",
            "author": "Albert Einstein", 
            "description" : "tut3 description", 
            "updatedAt" : "now", 
            "createdAt" : "yesterday" 

        }, {
            "id" : "2",
            "title": "node tut 5",
            "author": "Albert Einstein", 
            "description" : "tut3 description", 
            "updatedAt" : "now", 
            "createdAt" : "yesterday" 

        }]
        it("Should add Books in DB", (done) => {
            for (book in books) {
                chai.request(server)
                    .post("/api/quotes/")
                    .send(books[book])
                    .end((err, res) => {
                        res.should.have.status(200);
                        console.log("Response Body:", res.body);
                        
                    })
            }
            done()
        })
        
        
        it ("Should Fetch all the Books", (done)=>{
            chai.request(server)
                .get("/api/quotes/")
                .end((err, result)=>{
                    result.should.have.status(200);
                    //console.log ("Got",result.body.data.length, " docs")
                    //console.log ("Result Body:", result.body);
                    
                    done()
                })
        })
        
        it ("Should Fetch Particular Book only", (done)=>{
            chai.request(server)
                .get("/api/quotes/"+books[1].id)
                .end((err, result)=>{                    
                    result.should.have.status(200)
                    //console.log("Fetched Particlar Book using /GET/BOOKS/:BOOKID ::::", result.body)
                    done()
                })
        })

        
        it ("Should Update Partcular Book Only", (done)=>{
            var updatedBook = {
                "title": "node tut 5222222",
                "author": "Albert Einstein", 
                "description" : "tut3 description", 
                "updatedAt" : "now"
            }
            
            chai.request(server)
                .put("/api/quotes/"+books[1].id)
                .send(updatedBook)
                .end((err, result)=>{                    
                    result.should.have.status(200)
                    console.log("Updated Particlar Book using /GET/BOOKS/:BOOKID ::::", result.body)
                    done()
                })
        })
        

        it ("should check data updated in DB", (done)=>{
            chai.request(server)
                .get("/api/quotes/"+books[1].id)
                .end((err, result)=>{                    
                    result.should.have.status(200)                
                    //result.body.data.year.should.eq("2017")
                    //console.log("Fetched Particlar Book using /GET/BOOKS/:BOOKID ::::", result.body)    
                    done()
                })
        })

        
        it("Should Delete Particular Book", (done)=>{
            chai.request(server)
                .delete("/api/quotes/"+books[1].id)
                .end((err, result)=>{                    
                    result.should.have.status(200)                
                    //console.log("Deleted Particlar Book using /GET/BOOKS/:BOOKID ::::", result.body)    
                    done()
                })
        })

        
        it("Should confirm delete with number of Docs from DB", (done)=>{
            chai.request(server)
                .get("/api/quotes/")
                .end((err, result)=>{
                    result.should.have.status(200);
                    //result.body.data.length.should.eq(1);
                    //console.log ("Got",result.body.data.length, " docs")
                    //console.log ("Result Body:", result.body);
                    done()
                })
        })
        

    })
    
    
    
})
    