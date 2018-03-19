const router = require('express').Router()
const {Agreement} = require('../db/models')
module.exports = router


//tested
router.get('/', (req, res, next) => {
  Agreement.findAll({ include: [{ all: true }] })
    .then(agreements => res.json(agreements))
    .catch(next)
})

router.post('/', (req, res, next) => {
  Agreement.create(req.body)
    .then(agreement => res.json(agreement))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
    Agreement.findById(req.params.id, { include: [{ all: true }] })
      .then(agreement => res.json(agreement))
      .catch(next)
  })

router.put('/:id', (req, res, next) => {
  Agreement.findById(req.params.id)
    .then(agreement => agreement.update(req.body, {returning: true}))
    .then(agreement => res.json(agreement))
    .catch(next);
})

