const jwt = require('jsonwebtoken');

const config = process.env;

const verifyToken = (req, res, next) => {
    const token = req.headers['x-access-token']||req.query.token||req.body.token;
    if (!token) {
        return res.status(403).send("Access denied. No token provided.");
    }   
    try{
        const decoded = jwt.verify(token, config.TOKEN_KEY);
        req.user = decoded;
        next();
    }catch(err){
        return res.status(401).send("Invalid token.");
    }
    return next();
}
module.exports = verifyToken;
