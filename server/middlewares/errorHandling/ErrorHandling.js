const ErrorHandler = (err, req, res, next) => {
  const errStatus = err.statusCode || 500;
  const errMsg = err.message || 'Something went wrong';
  res.status(errStatus).json({
      message: errMsg,
      stack: err.stack
  })
}

module.exports = ErrorHandler