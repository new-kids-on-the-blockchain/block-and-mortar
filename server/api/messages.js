const router = require('express').Router()
const { Message } = require('../db/models')
module.exports = router

// router.get('/:threadId', (req, res, next) => {
//   Message.findAll({
//     where: {
//       threadId: req.params.threadId
//     },
//     include: [{ all: true }]
//   })
//     .then(messages => res.json(messages))
//     .catch(next)
// })

router.post('/', (req, res, next) => {
  Message.create(req.body)
    .then(message => Message.findById(message.id, {include: [{ all: true }]}))
    .then(foundMessage => res.json(foundMessage ))
    .catch(next)
})


