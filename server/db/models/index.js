const User = require('./user')
//const Agreement = require('./agreement')
const Service = require('./service')

Service.belongsTo(User, {as: 'Buyer'})
Service.belongsTo(User, {as: 'Seller'})
// User.hasMany(Service, {as: 'Buyer'})
// User.hasMany(Service, {as: 'Seller'})

//Agreement.belongsTo(User, {as: 'Buyer'})
//Agreement.belongsTo(User, {as: 'Seller'})
//Agreement.belongsTo(Service, {as: 'Service'})

module.exports = {
  User,
  //Agreement,
  Service
}
