const db = require("../models");
const Quote = db.quotes;
const Op = db.Sequelize.Op;

// Create and Save a new Quote
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Quote
  const quote = {
    title: req.body.title,
    description: req.body.description,
    author : req.body.author,
    published: req.body.published ? req.body.published : false
  };

  // Save Quote in the database
  Quote.create(quote)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Quote."
      });
    });
};

// Retrieve all Quote from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  Quote.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving quotes."
      });
    });
};

// Find a single Quote with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Quote.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Quote with id=" + id
      });
    });
};

// Update a Quote by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Quote.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Quote was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Quote with id=${id}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Quote with id=" + id
      });
    });
};

// Delete a Quote with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Quote.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Quote was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Quote with id=${id}. Maybe Quote was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Quote with id=" + id
      });
    });
};

// Delete all Quote from the database.
exports.deleteAll = (req, res) => {
  Quote.destroy({
    where: {},
    truncate: false
  })
  /*
    .then(nums => {
      res.send({ message: `${nums} Quote were deleted successfully!` });
    })
    */
   .then(nums => {
    res.send({ message: `Quote were deleted successfully!` });
  })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Quote."
      });
    });
};

// find all published Quote
exports.findAllPublished = (req, res) => {
  Quote.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving quotes."
      });
    });
};
