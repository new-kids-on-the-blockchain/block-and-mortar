const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/services', require('./services'))
router.use('/contracts', require('./contracts'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
