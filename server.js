const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const {sequelize} = require("./app/models");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//const db = require("./app/models");
//db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});
const PORT = 3000;

/*
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  require("./app/routes/quote.routes")(app);
  console.log(`Server is running on port ${PORT}.`);
  app.emit('serverStarted');
});
*/
sequelize.sync().then(() => {
  app.listen(PORT, () => {
      require('./app/routes/quote.routes')(app);
      console.log(`App listening on port ${PORT}`);

      app.emit('serverStarted');
  });
});

/*
const server = app.listen(3000, function(){
  console.log("API en cours d'exécution sur le port 3000");
  app.emit('serverStarted');
}); 
*/


module.exports = app;
