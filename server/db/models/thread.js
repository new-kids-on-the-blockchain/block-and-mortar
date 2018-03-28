const Sequelize = require("sequelize");
const db = require("../db");

const Thread = db.define("thread");

Thread.getAllByUser = function(userId) {
  return Thread.findAll({
    where: {
      $or: [{buyerId: {$eq: userId} }, { sellerId: {$eq: userId}}]
    },
    include: [{ all: true }] })
}


module.exports = Thread;

