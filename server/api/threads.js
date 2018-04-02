const router = require('express').Router()
const {Thread} = require('../db/models')
module.exports = router

// this route gets all threads by a specific user, threads on which they are the initiator and threads on which they are the recipient. for loading of the "inbox" component
router.get('/', (req, res, next) => {
  Thread.getAllByUser(req.user.id)
    .then(threads => res.json(threads))
    .catch(next)
})

// this route is to find or create a route when a user is the initiator and should be involved in the "current thread thunk"
router.post('/', (req, res, next) => {
  Thread.findOrCreate({ where: {
      buyerId: req.user.id,
      sellerId: req.body.sellerId,
      serviceId: req.body.serviceId
    }})
    .spread(function (thread, createdThreadBool) {
      return Thread.findById(thread.id, {include: [{ all: true, include: [{all: true}] }]})
      .then(foundThread => res.json(foundThread))
  })
  .catch(next);
})

