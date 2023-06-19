module.exports = (req, res, next) => {
    req.userAgent= req.headers['user-agent'];
    next();
}