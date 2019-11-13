require('dotenv').config();
const jwt = require("jsonwebtoken");

module.exports = {
    restricted,
    generateToken,
}

function restricted (req, res, next) {
    const secret = process.env.JWT_SECRET || "A secret lives here";
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, secret, (error, decodedToken) => {
            if (error) {
                res.status(401).json({ message: "Something went wrong:- " + error.message})
            } else {
                req.user = decodedToken.user
                next()
            }
        })
    } else {
        res.status(401).json({ message: "Invalid credentials, please check login details again"})
    }
}

function generateToken(user) {
    const payload = {
      subject: user.id,
      username: user.username,
      department: user.department
    };
    const secret = process.env.JWT_SECRET || "A secret lives here";
    const options = {
      expiresIn: "1d"
    };
    const result = jwt.sign(payload, secret, options);
    return result;
  }