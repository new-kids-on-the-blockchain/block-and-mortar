const router = require('express').Router()
const {Service} = require('../db/models')
module.exports = router

// tested
router.get('/', (req, res, next) => {
  Service.findAll({ include: [{ all: true }] })
    .then(services => res.json(services))
    .catch(next)
})

// tested
router.post('/', (req, res, next) => {
  Service.create(req.body)
    .then(service => Service.findById(service.id, {include: [{ all: true }]}))
    .then(foundService => res.json(foundService))
    .catch(next);
})

// tested
router.get('/:id', (req, res, next) => {
  Service.findById(req.params.id, { include: [{ all: true }] })
    .then(service => res.json(service))
    .catch(next)
})

// tested
router.put("/:id", (req, res, next) => {
  Service.findById(req.params.id)
    .then(service => service.update(req.body))
    .then(updatedService => Service.findById(req.params.id, { include: [{ all: true }] }))
    .then(foundService => res.json(foundService))
    .catch(next);
});
