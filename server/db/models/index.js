const User = require('./user')
// const Agreement = require('./agreement')
const Service = require('./service')

Service.belongsTo(User, {as: 'Buyer', foreignKey: 'buyer'})
Service.belongsTo(User, {as: 'Seller', foreignKey: 'seller'})

User.hasMany(Service, {as: 'Buyer', foreignKey: 'buyer'})
User.hasMany(Service, {as: 'Seller', foreignKey: 'seller'})
// Agreement.belongsTo(Service, {as: 'Service'})

module.exports = {
  User,
  // Agreement,
  Service
}
