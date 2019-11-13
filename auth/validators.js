
module.exports = {
    restricted
}

function restricted (req, res, next) {
    if (req.session && req.session.user) {
        next();
    } else {
        res.status(401).json({ message: "Invalid credentials, please check login details again"})
    }
}