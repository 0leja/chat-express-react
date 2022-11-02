module.exports = function (err, req, res, next) {
    if (!!err) {
        return res.status(err.status).json({message: err.message})
    }
    return res.status(501).json({message: 'Непридусмотренная ошибка!'})
}