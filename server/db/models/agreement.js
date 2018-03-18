const Sequelize = require('sequelize');
const db = require('../db');

const Agreement = db.define('agreement', {
  blockchainContractId: {
    type: Sequelize.STRING,
    allowNull: true
  },
  status: {
    type: Sequelize.ENUM('Initiated', 'Pending', 'Accepted', 'Rejected', 'Completed'),
    defaultValue: 'Initiated'
  }
}, {
  hooks: {
    beforeUpdate: function(agreement) {
      if (agreement.status === "Accepted") {
        const updatedRequestorService = agreement.getRequestorService()
          .then(service => {
            service.update({isAvailable: false})
          })
        const updatedRequesteeService =  agreement.getRequesteeService()
          .then(service => service.update({isAvailable: false}))
        return Promise.all([updatedRequestorService, updatedRequesteeService])
      }
    }
  }
}
)

module.exports = Agreement;


