const User = require('./user')
const Agreement = require('./agreement')
const Service = require('./service')

Service.belongsTo(User)
User.hasMany(Service)

Agreement.belongsTo(User, {as: 'Buyer'})
Agreement.belongsTo(User, {as: 'Seller'})
Agreement.belongsTo(Service, {as: 'Service'})

module.exports = {
  User,
  Agreement,
  Service
}
