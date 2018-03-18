const User = require('./user')
const Agreement = require('./Agreement')
const Service = require('./service')
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */
Service.belongsTo(User)
User.hasMany(Service)

Agreement.belongsTo(User, {as: 'Requestor'})
Agreement.belongsTo(User, {as: 'Requestee'})
Agreement.belongsTo(Service, {as: 'RequestorService'})
Agreement.belongsTo(Service, {as: 'RequesteeService'})



/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Agreement,
  Service
}
