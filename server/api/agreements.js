const router = require('express').Router()
const {Agreement} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
    Agreement.findAll()
    .then(agreements => res.json(agreements))
    .catch(next)
})
