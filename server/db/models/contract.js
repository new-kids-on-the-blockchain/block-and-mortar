const Sequelize = require('sequelize');
const db = require('../db');

const Contract = db.define('contract', {
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  requestedServiceId:  {
    type: Sequelize.INTEGER
  },
  status: {
    type: Sequelize.ENUM('Created', 'Pending', 'Completed', 'Canceled')
  }
})

module.exports = Contract
