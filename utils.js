const makeError = (status, message) => {
  const err = new Error(message)
  err.status = status;
  return err
}

const isLoggedIn = (req, res, next) => {
  if (!req.user) return next(makeError('401', 'Login'))
  next();
}

const isAdmin = (req, res, next) => {
  if (!req.user.isAdmin) return next(makeError('403', 'Forbidden'))
  next()
}

module.exports = {isAdmin, isLoggedIn, makeError}
