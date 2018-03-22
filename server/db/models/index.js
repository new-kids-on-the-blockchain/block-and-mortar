const User = require('./user');
const Service = require('./service');
const Message = require('./message');
const Thread = require('./thread');

Service.belongsTo(User, {as: 'Buyer', foreignKey: 'buyer'});
Service.belongsTo(User, {as: 'Seller', foreignKey: 'seller'});

User.hasMany(Service, {as: 'Buyer', foreignKey: 'buyer'});
User.hasMany(Service, {as: 'Seller', foreignKey: 'seller'});

Message.belongsTo(User, {as: 'Sender', foreignKey: 'sender'});
Message.belongsTo(Thread)

Thread.hasMany(Message)
Thread.belongsTo(User, {as: 'Initiator'})
Thread.belongsToUser(User, {as: 'Recipient'})


module.exports = {
  User,
  Message,
  Service,
  Thread
}
