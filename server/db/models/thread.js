const Sequelize = require("sequelize");
const db = require("../db");
// const op = Sequelize.Op;
// const operatorsAliases = {
//    $eq: op.eq,
//    $or: op.or
// }

const Thread = db.define("thread");

Thread.getAllByUser = function(userId) {
  return Thread.findAll({
    where: {
      $or: [{buyerId: {$eq: userId} }, { sellerId: {$eq: userId}}]
    },
    include: [{ all: true }] })
}


module.exports = Thread;

