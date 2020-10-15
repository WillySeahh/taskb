# Node.js Express, Sequelize & PostgreSQL: CRUD Rest APIs


## Project setup
```
npm install
```

### Run
```
node server.js
```

### Credits
https://bezkoder.com/node-express-sequelize-postgresql/
https://github.com/bezkoder/node-express-sequelize-postgresql


### To use postman and test
Post: http://localhost:8080/api/tutorials
Make sure change data to JSON format
{ 
	"id" : 5,
	"title": "node tut 5",
	"description" : "tut3 description",
	"published" : false,
	"updatedAt" : "now",
	"createdAt" : "yesterday"
}