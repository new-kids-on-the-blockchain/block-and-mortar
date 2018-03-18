const Sequelize = require('sequelize');
const db = require('../db');

const Contract = db.define('contract', {
  agreementId: {
    type: Sequelize.STRING,
    allowNull: true
  },
  status: {
    type: Sequelize.ENUM('Initiated', 'Pending', 'Accepted', 'Rejected', 'Completed')
  }
})



module.exports = Contract

//NOTE: User 1 is the initiator. They want a service from User 2. User 2 can accept or decline the service and pick a service in return from User 1.



