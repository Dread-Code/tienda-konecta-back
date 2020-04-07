const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

module.exports = () =>{
    const token = req.headers["token"];

    if (!token) {
        const error = new Error();
        error.message = "Token must be sent";
        error.status = "400";
        return error;
    }

    jwt.verify(token, JWT_SECRET, (err, decodeToken) =>{
        if (err) {
            const error = new Error();
            error.message = "Invalid token";
            error.status = 401;
            return error;
        }

        req.user = decodeToken.user;
        next();
    });
}