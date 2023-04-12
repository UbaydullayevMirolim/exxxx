const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.JWT_SECRET_KEY 

const sign = (payload) => jwt.sign(payload, SECRET_KEY, {expiresIn: "36h"})
const verify = (payload) => jwt.verify(payload, SECRET_KEY)

module.exports = {
    sign,
    verify,
};