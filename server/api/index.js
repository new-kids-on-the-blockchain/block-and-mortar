const router = require('express').Router()
module.exports = router

router.use('/services', require('./services'))
router.use('/messages', require('./messages'))
router.use('/users', require('./users'))
router.use('/threads', require('./threads'))


router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
