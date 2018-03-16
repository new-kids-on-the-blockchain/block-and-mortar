const Sequelize = require('sequelize');
const db = require('../db');

const Service = db.define('service', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  categories: {
    type: Sequelize.ENUM('Childcare', 'Pet', 'Home Maintanance', 'Food', 'Products')
  }
})

module.exports = Service
