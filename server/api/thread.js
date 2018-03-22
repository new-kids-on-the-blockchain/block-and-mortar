const router = require('express').Router()
const {Thread} = require('../db/models')

module.exports = router


router.get('/', (req, res, next) => {
  Thread.getAllByUser(req.user.id)
    .then(threads => res.json(threads))
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

