var assert = require("assert");
let chai = require("chai");
let chaiHttp = require("chai-http");
const { quotes } = require("./app/models");
let server=require("./server");
let should = chai.should();
const app = require('./server');



chai.use(chaiHttp);
describe("Testing Quotes CRUD API", function(){


    var quotesArr = []
    
    before((done) => {
        app.on('serverStarted', () => {

            done();
        });
    }); 
        
    
    describe ("DELETE ALL", function(){
        it("Should remove all exiting quotes first", (done) =>{
           // console.log ("Deleting all data in db first.")
            chai.request(server)
                .delete("/api/quotes/")
                .send({})
                .end((err,result)=>{

                    result.should.have.status(200);
                    result.body.message.should.have.string('were deleted successfully!');

                    done()
                })
        })

    })
    
    
    
    
    describe ("CRUD OPERATIONS", function(){

        var books = [{
         
            "title": "node tut 5",
            "author": "Albert Einstein", 
            "description" : "tut3 description", 
            "updatedAt" : "now", 
            "createdAt" : "yesterday" 

        }, {
           
            "title": "node tut 5",
            "author": "Robert Downey", 
            "description" : "tut4 description", 
            "updatedAt" : "now", 
            "createdAt" : "yesterday" 

        }]
        it("Should add first quote in DB", (done) => {
          
                chai.request(server)
                    .post("/api/quotes/")
                    .send(books[0])
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.description.should.be.string('tut3 description');
                        res.body.author.should.be.string('Albert Einstein');
                        
                    })
            
            done()
        })


        it("Should add second quote in DB", (done) => {
          
            chai.request(server)
                .post("/api/quotes/")
                .send(books[1])
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.description.should.be.string('tut4 description');
                    res.body.author.should.be.string('Robert Downey');
                    
                })
        
        done()
    })
        
        
        it ("Should Fetch all the Quotes", (done)=>{
            chai.request(server)
                .get("/api/quotes")
                .end((err, result)=>{
                    result.should.have.status(200);
                    //console.log ("Got",result.body.data.length, " docs")
                    //console.log ("Result Body:", result.body);
                    result.body.should.be.a('array');
                    quotesArr = result.body;
                    quotes2 = result.body;
                    quotes2[0].description.should.be.string('tut3 description');
                    quotes2[1].description.should.be.string('tut4 description');
                    //console.log(result.body);
                    
                    done()
                })
        })
        
        
        it ("Should Fetch Particular Quote only", (done)=>{
            chai.request(server)
                .get("/api/quotes/"+ quotesArr[0].id)
                .end((err, result)=>{                    
                    result.should.have.status(200);
                   
                    result.body.description.should.be.string('tut3 description');
        
               
                    done()
                })
        })

        
        it ("Should Update Partcular Quote Only", (done)=>{
            var updatedBook = {
                "title": "updatedtitle",
                "author": "updatedauthor", 
                "description" : "updateddescription", 
                "updatedAt" : "now"
            }
            
            chai.request(server)
                .put("/api/quotes/"+quotesArr[0].id)
                .send(updatedBook)
                .end((err, result)=>{                    
                    result.should.have.status(200);
                    result.body.should.be.a('object');
                    result.body.message.should.be.string("Quote was updated successfully.");
                    done()
                })
        })
        

        it ("Should check if quote data is updated in DB", (done)=>{
            chai.request(server)
                .get("/api/quotes/"+quotesArr[0].id)
                .end((err, result)=>{                    
                    result.should.have.status(200);               
                    result.body.description.should.be.string("updateddescription");
                    //console.log("Fetched Particlar Book using /GET/BOOKS/:BOOKID ::::", result.body)    
                    done()
                })
        })

        
        it("Should Delete Particular Quote", (done)=>{
            chai.request(server)
                .delete("/api/quotes/"+quotesArr[1].id)
                .end((err, result)=>{                    
                    result.should.have.status(200);       
                    result.body.message.should.have.string("Quote was deleted successfully");   
                    done()
                })
        })

        
        

    })


    
    
    
    
})


    