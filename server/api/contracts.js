const router = require('express').Router()
const {Contract} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Contract.findAll()
    .then(services => res.json(services))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  Contract.findById(req.params.id)
    .then(service => res.json(service))
    .catch(next)
})

