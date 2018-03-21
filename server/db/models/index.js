const User = require('./user')
//const Agreement = require('./agreement')
const Service = require('./service')

Service.belongsTo(User, {as: 'Buyer', foreignKey: 'buyer'})
Service.belongsTo(User, {as: 'Seller', foreignKey: 'seller'})

User.hasMany(Service, {as: 'Buyer', foreignKey: 'buyer'})
User.hasMany(Service, {as: 'Seller', foreignKey: 'seller'})

module.exports = {
  User,
  //Agreement,
  Service
}
