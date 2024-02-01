const jwt = require('jsonwebtoken');

const { SECRET_KEY } = process.env;
const UnAutorizedError = require('../errors/UnAutorizedError');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new UnAutorizedError('Необходима авторизация');
  }
  const token = authorization.replace('Bearer ', '');
  let payload;
  try {
    payload = jwt.verify(token, SECRET_KEY);
  } catch (err) {
    throw new UnAutorizedError('Необходима авторизация');
  }
  req.user = payload;
  next();
};
