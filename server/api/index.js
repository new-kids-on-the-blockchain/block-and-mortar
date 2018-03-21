const router = require('express').Router()
module.exports = router

router.use('/web3', require('./web3'))
router.use('/services', require('./services'))
router.use('/agreements', require('./agreements'))
router.use('/users', require('./users'))


router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
