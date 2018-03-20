const Sequelize = require('sequelize');
const db = require('../db');
const Agreement = require('./agreement')

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
  },
  price: {
    type: Sequelize.FLOAT,
    validate: {
      min: 0
    }
  },
  status: {
    type: Sequelize.ENUM('Posted', 'Pending', 'Completed'),
    defaultValue: 'Posted'
    }
}
// {
//     hooks: {
//       afterUpdate: function(service) {
//         if (service.status === 'Pending') {
//             service.isAvailable = false;
//         }
//       }
//     }
  // }
)

module.exports = Service
