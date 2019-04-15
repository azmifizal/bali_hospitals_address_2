const jwt = require('jsonwebtoken');
const secret = require('../helpers/config.env');

const authMiddleware = (req, res, next) => {
    const token = req.get('Authorization');
    // cek token
    if (!token) {
        // console.log(token);   
        req.auth = false;
        return next();
    }
    
    // cek split Bearer
    const splitToken = token.split(" ")[1];
    if (!splitToken || splitToken === "" ) {
        req.auth = false;
        return next();
    }
    
    // verify token
    let checkToken;
    try {
        checkToken = jwt.verify(splitToken, secret.key_s);
    } catch (error) {
        req.auth = false;
        return next();
    }
    
    // final check
    if (!checkToken) {
        req.auth = false;
        return next();
    }

    req.auth = true;
    req.userId = checkToken.userId;
    req.permissionLevel = checkToken.permissionLevel;
    return next();
}

module.exports = authMiddleware;