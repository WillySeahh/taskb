module.exports = app => {
  const quotes = require("../controllers/quote.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", quotes.create);

  // Retrieve all Tutorials
  router.get("/", quotes.findAll);

  // Retrieve all published Tutorials
  router.get("/published", quotes.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", quotes.findOne);

  // Update a Tutorial with id
  router.put("/:id", quotes.update);

  // Delete a Tutorial with id
  router.delete("/:id", quotes.delete);

  // Create a new Tutorial
  router.delete("/", quotes.deleteAll);

  app.use("/api/quotes", router);
};
