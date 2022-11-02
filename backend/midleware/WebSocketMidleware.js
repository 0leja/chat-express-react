module.exports = io => (res, req, next) => {
    req.io = io;
    next();
}