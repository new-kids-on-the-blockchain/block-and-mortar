// const router = require('express').Router()
// const {Agreement} = require('../db/models')
// module.exports = router


// // tested
// router.get('/', (req, res, next) => {
//   Agreement.findAll({ include: [{ all: true }] })
//     .then(agreements => res.json(agreements))
//     .catch(next)
// })

// // tested
// router.post('/', (req, res, next) => {
//   Agreement.create(req.body)
//     .then(agreement => Agreement.afindById(agreement.id, {include: [{ all: true }]}))
//     .then(foundAgreement => res.json(foundAgreement))
//     .catch(next)
// })

// // tested
// router.get('/:id', (req, res, next) => {
//     Agreement.findById(req.params.id, { include: [{ all: true }] })
//       .then(agreement => res.json(agreement))
//       .catch(next)
//   })

// // tested
// router.put('/:id', (req, res, next) => {
//   Agreement.findById(req.params.id)
//     .then(agreement => agreement.update(req.body))
//     .then(updatedAgreement => Agreement.findById(req.params.id, { include: [{ all: true }] }))
//     .then(foundAgreement => res.json(foundAgreement))
//     .catch(next)
// })

