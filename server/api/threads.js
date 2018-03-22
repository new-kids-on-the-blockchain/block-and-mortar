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
router.get('/', (req, res, next) => {
  Thread.findOrCreate({ where: {InitiatorId: req.user.id}})
    .then(thread => Thread.findById(thread.id, {include: [{ all: true }]}))
    .then(foundThread => res.json(foundThread))
    .catch(next)
})

router.post('/', (req, res, next) => {
  Thread.create(req.body)
    .then(thread => Thread.findById(thread.id, {include: [{ all: true }]}))
    .then(foundThread => res.json(foundThread))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
    Thread.findById(req.params.id, { include: [{ all: true }] })
      .then(thread => res.json(thread))
      .catch(next)
  })

