const Sequelize = require('sequelize');
const db = require('../db');
const Contract = require('./contract')

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
    type: Sequelize.ENUM('Childcare', 'Pet', 'Home Maintenance', 'Food', 'Misc', 'Professional', 'Products')
  },
  isAvailable: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  }
})

//HOOKS
// Service.beforeUpdate((service) => {
//   return Contract.findbyId({
//     where: service.id
//   }).then(contract => {
//     console.log('FoundContract', contract.dataValues)
//     if (contract.status === 'Completed') {
//       service.isAvailable = false
//     }
//   }).catch(Error)
// })

module.exports = Service
//can i use contracts model here?
