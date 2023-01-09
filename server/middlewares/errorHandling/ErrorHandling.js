const ErrorHandler = (err, req, res, next) => {
  if(res.HeadersSend) next(err)
  const errStatus = err.statusCode || 500;
  const errMsg = err.message || 'Something went wrong';
  res.status(errStatus).json({
      success: false,
      status: errStatus,
      message: errMsg,
      stack: (process.env.NODE_ENV === 'development') ? err.stack : {}
  })
} 

module.exports = ErrorHandler;
