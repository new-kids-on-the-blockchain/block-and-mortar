// const Sequelize = require('sequelize');
// const db = require('../db');

// const Agreement = db.define('agreement', {
//   blockchainContractId: {
//     type: Sequelize.STRING,
//     allowNull: true
//   },
//   status: {
//     type: Sequelize.ENUM('Initiated', 'Accepted', 'Rejected', 'Completed'),
//     defaultValue: 'Initiated'
//   }
// }, {
//   hooks: {
//     beforeUpdate: function(agreement) {
//       if (agreement.status === "Accepted") {
//         return agreement.getService()
//           .then(service => service.update({isAvailable: false}))
//       }
//     }
//   }
// })

// module.exports = Agreement;


