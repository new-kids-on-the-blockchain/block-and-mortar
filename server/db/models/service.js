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
    type: Sequelize.ENUM('Goods', 'Services')
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
    },
  imgUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://st.depositphotos.com/1742172/1490/v/950/depositphotos_14907315-stock-illustration-cartoon-bricks.jpg'
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
