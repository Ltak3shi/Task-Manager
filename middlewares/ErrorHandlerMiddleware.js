const errorHandler = (err, req, res, next) => {
    res.status(err.statusCode).json({
        error: {
            code: err.statusCode,
            message: err.message
        }
    })
}

module.exports = errorHandler