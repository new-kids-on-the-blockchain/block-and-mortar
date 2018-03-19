const User = require('./user')
const Agreement = require('./agreement')
const Service = require('./service')

Service.belongsTo(User)
User.hasMany(Service)

Agreement.belongsTo(User, {as: 'Requestor'})
Agreement.belongsTo(User, {as: 'Requestee'})
Agreement.belongsTo(Service, {as: 'RequestorService'})
Agreement.belongsTo(Service, {as: 'RequesteeService'})

module.exports = {
  User,
  Agreement,
  Service
}
