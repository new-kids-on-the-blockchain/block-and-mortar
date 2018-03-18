const router = require('express').Router()
const {Service} = require('../db/models')
module.exports = router




router.get('/', (req, res, next) => {
  Service.findAll()
    .then(services => res.json(services))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  Service.findById(req.params.id)
    .then(service => res.json(service))
    .catch(next)
})

router.put("/:id", (req, res, next) => {
  const { id } = req.params;
  Service.update(req.body, {
    where: { id: id },
    returning: true
  })
    .then(([_, [updatedService]]) => {
      res.json(updatedService);
    })
    .catch(next);
});
