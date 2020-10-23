# CS3219 OTOT Task B


### Task B1

Implement a simple Javascript backend and REST API to GET, POST, PUT and DELETE. This repository contains a API that allows for create, retrieve, update and delete of quotes. The application uses Node.js and PostgreSQL(with pgAdmin). It will be testing through Postman.

Setup and Run for Task B1 and B2
1. You are required to download and install Node.js, PostgreSQL (with pgAdmin) and Postman.
2. Clone this repository by git clone https://github.com/WillySeahh/taskb.git
3. Navigate to the root directory by cd taskb.
4. Run npm install to install all the required dependencies to run this application.
5. Run pgAdmin applicaton to start the database and create a new Database name task-b in pgAdmin.
6. Run node server.js to start the application.
7. Afterwards, we can start accessing the API through the Postman.



Local Testing using Postman:  
(Please refer to my submitted doc for a clearer view and I have included photos so that it will be easy
for users to follow)

1. Get all quotes  

Enter localhost:3000/api/quotes -> Select GET -> Click Send  

You should get the list of all quotes. If the database is empty, it will return an empty array.


2. Create a new quote  

Enter localhost:3000/api/quotes -> Select Body Tab -> Select raw -> Select Json -> Fill in the “title”, “author”, “description” -> Select Post -> Click Send  

You should get the detail of the new quote. 

3. Get a specific quote  

Enter -> localhost:3000/api/quotes/{id} -> Replace {id} with the id of the quote -> Select Get -> Click send   
 
You should get the detail of this specific quote.  
If quote doesn’t exist, it will return a message saying quote with id do not exist.
 

4. Update a quote  

Enter -> localhost:3000/api/quotes/{id} -> Replace {id} with id of the quote -> Select Body Tab -> Select raw -> Select Json -> Fill in the new “title”, “author”, “description” -> Select Put -> Click send  

 
You should get the message of quote was updated successfully.

If the id is invalid, you will be informed as well.  
 

5. Delete a quote  

Enter -> localhost:3000/api/quotes/{id} -> Replace {id} with id of the quote -> Select Delete -> Click Send  
 
You should receive a message saying quote is deleted successfully.

6. Delete all quotes  

Enter -> localhost:3000/api/quotes -> Select Delete -> Click Send  
 
You should get the message of total number of quotes was deleted successfully.


**For deployed endpoint testing refer to B3 below. B3 is where I’ve done by deploying.**


### Task B2  
Write simple test cases for API and use a CI tool (Travis CI) to automate testing.

The test cases are created by Mocha and Chai.  
(Please refer to my submitted doc for a clearer view and I have included photos so that it will be easy
for users to follow)

Run test locally
1. Ensure you have Done Steps 1-5 of setup (at page 1 of this document)
2. Run `npm test` to run test case through Mocha
 
 
Run test through Travis CI
1. Ensure you have push this repository to your Github.
2. Go to Travis CI.
3. Login through the Github account.
4. Go to Travis CI Setting page, under Repositories tab, click Manage repositories on Github.
5. Under Repository access, either select All repositories or only select this repository on you Github.
6. Now, you can edit README.md and push it to your repository.
7. You should check the Travis CI to check the status of test on travis.  



### Task B3  
Use CD tool for automated deployment to a serverless service.

This task using AWS Lambda as serverless service and Travis CI for automatic deployment.

### Postman Testing with serverless service (Continued from B1 where they said “successful deployed endpoints”)  

**Please refer to my submitted doc for a clearer view and I have included photos so that it will be easy
for users to follow**  

This section will show how to use Postman to test the APIs from deployment using Lambda.



The steps for testing with AWS Lambda is same as Postman testing locally except the URL will be different.
You are required to use https://kv2wuhd9ll.execute-api.ap-southeast-1.amazonaws.com/dev/api/quotes/ instead of http://localhost:3000/api/quotes when you are accessing Get all quotes, Create a new quote and Delete all quotes.
 
 
You are required to use https://kv2wuhd9ll.execute-api.ap-southeast-1.amazonaws.com/dev/api/quotes/{id} instead of http://localhost:3000/api/quotes/{id} when accessing Get a specific quote, Update a quote and Delete a quote.
 
 


### Setup Travis with AWS Credentials for CD

Whenever I push my code to github, travis will automatically run tests and then afterwards deploy my code. 
1. Ensure the code is pushed to Guthub
2. Go to Travis CI
3. Select taskb tab and clicj on more options and choose settings.
4. Under Environment variable enter AWS ACCESS KEY AND SECRET KEY. Which will be stated in the pdf
 

### Sample of Quote
Post: http://localhost:3000/api/quotes
Make sure change data to JSON format
{ 
    "title": "online friday test",
    "author": "online friday test", 
    "description" : "nline friday test"
}