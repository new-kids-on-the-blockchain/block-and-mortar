const User = require('./user')
const Service = require('./service')
const Message = require('./message')

Service.belongsTo(User, {as: 'Buyer', foreignKey: 'buyer'})
Service.belongsTo(User, {as: 'Seller', foreignKey: 'seller'})

User.hasMany(Service, {as: 'Buyer', foreignKey: 'buyer'})
User.hasMany(Service, {as: 'Seller', foreignKey: 'seller'})

Message.belongsTo(User, {as: 'Sender', foreignKey: 'sender'})
Message.belongsTo(User, {as: 'Recipient', foreignKey: 'recipient'})

User.hasMany(Message, {as: 'Sender', foreignKey: 'sender'})
User.hasMany(Message, {as: 'Recipient', foreignKey: 'recipient'})


module.exports = {
  User,
  Message,
  Service
}
