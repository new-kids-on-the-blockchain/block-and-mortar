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

const toDate = inputStr => `${inputStr.slice(5,7)}/${inputStr.slice(8,10)}/${inputStr.slice(0,4)}`

module.exports = {isAdmin, isLoggedIn, makeError, toDate}
