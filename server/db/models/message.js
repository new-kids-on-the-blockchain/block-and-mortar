const Sequelize = require("sequelize");
const db = require("../db");
const op = Sequelize.Op;
const operatorsAliases = {
    $eq: op.eq,
    $or: op.or
}

const Message = db.define("message", {
    subject: {
      type: Sequelize.STRING,
      allowNull: false
    },
    content: {
      type: Sequelize.STRING,
      allowNull: false
    }
});

Message.getAllByUser = function(userId) {
  return   Message.findAll({
    where: {
      $or: [{recipient: {$eq: userId} }, { sender: {$eq: userId}}]
    },
    include: [{ all: true }] })
}


module.exports = Message;

