const User = require('./user')
const Contract = require('./contract')
const Service = require('./service')
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */
Service.belongsTo(User)
User.hasMany(Service)

Contract.belongsTo(User, {as: 'user1'})
Contract.belongsTo(User, {as: 'user2'})
Contract.belongsTo(Service, {as: 'user1Service'})
Contract.belongsTo(Service, {as: 'user2Service'})



/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Contract,
  Service
}
