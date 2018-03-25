const User = require('./user');
const Service = require('./service');
const Message = require('./message');
const Thread = require('./thread');

Service.belongsTo(User, {as: 'Buyer', foreignKey: 'buyer'});
Service.belongsTo(User, {as: 'Seller', foreignKey: 'seller'});

User.hasMany(Service, {as: 'Buyer', foreignKey: 'buyer'});
User.hasMany(Service, {as: 'Seller', foreignKey: 'seller'});

Message.belongsTo(User, {as: 'Sender', foreignKey: 'senderId'});
Message.belongsTo(Thread)

Thread.hasMany(Message)
Thread.belongsTo(User, {as: 'buyer'})
Thread.belongsTo(User, {as: 'seller'})
Thread.belongsTo(Service, {as: 'service'})


module.exports = {
  User,
  Message,
  Service,
  Thread
}
