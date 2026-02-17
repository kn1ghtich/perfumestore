const jwt = require('jsonwebtoken');
const { jwtAccessSecret } = require('../config/env');

function requireAuth(req, _res, next) {
  const header = req.headers.authorization;

  if (!header || !header.startsWith('Bearer ')) {
    const error = new Error('Unauthorized');
    error.statusCode = 401;
    throw error;
  }

  const token = header.replace('Bearer ', '');
  const payload = jwt.verify(token, jwtAccessSecret);
  req.user = payload;

  next();
}

module.exports = { requireAuth };
