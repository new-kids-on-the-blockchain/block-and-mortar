const router = require('express').Router()
const {Message, User} = require('../db/models')

module.exports = router

// router.get('/', (req, res, next) => {
//   Message.findAll(where: {sender: req.user.id)}
//     .then(messages => res.json(messages))
//     .catch(next)
// })

router.post('/', (req, res, next) => {
  console.log('req.body is: ', req.body)
  Message.create(req.body)
    .then(message => Message.findById(message.id, {include: [{ all: true }]}))
    .then(foundMessage => res.json(foundMessage ))
    .catch(next)
})

// may not be necessary


router.get('/:id', (req, res, next) => {
  Message.findById(req.params.id, { include: [{ all: true }] })
    .then(message => res.json(message))
    .catch(next)
})

