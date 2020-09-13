module.exports = (sequelize, Sequelize) => {
  const Quote = sequelize.define("quote", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    author:{
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });

  return Quote;
};
