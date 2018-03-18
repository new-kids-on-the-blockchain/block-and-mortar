const Sequelize = require('sequelize');
const db = require('../db');

const Service = db.define('service', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  category: {
    type: Sequelize.ENUM('Childcare', 'Pet', 'Home Maintenance', 'Food', 'Professional', 'Misc', 'Products')
  },
  isAvailable: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  }
})

module.exports = Service
