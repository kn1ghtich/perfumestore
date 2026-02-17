const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const prisma = require('../../config/prisma');
const {
  jwtAccessSecret,
  jwtRefreshSecret,
  jwtExpiresIn,
  jwtRefreshExpiresIn
} = require('../../config/env');
const { createApiError } = require('../../utils/apiError');

function buildTokens(user) {
  const payload = { id: user.id, email: user.email, role: user.role };

  const accessToken = jwt.sign(payload, jwtAccessSecret, { expiresIn: jwtExpiresIn });
  const refreshToken = jwt.sign(payload, jwtRefreshSecret, { expiresIn: jwtRefreshExpiresIn });

  return { accessToken, refreshToken };
}

async function register({ email, password, firstName, lastName }) {
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    throw createApiError('Email already exists', 409);
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email,
      passwordHash,
      firstName,
      lastName
    }
  });

  return { user, tokens: buildTokens(user) };
}

async function login({ email, password }) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    throw createApiError('Invalid credentials', 401);
  }

  const isValidPassword = await bcrypt.compare(password, user.passwordHash);
  if (!isValidPassword) {
    throw createApiError('Invalid credentials', 401);
  }

  return { user, tokens: buildTokens(user) };
}

async function refresh(refreshToken) {
  const payload = jwt.verify(refreshToken, jwtRefreshSecret);
  const user = await prisma.user.findUnique({ where: { id: payload.id } });

  if (!user) {
    throw createApiError('User not found', 404);
  }

  return buildTokens(user);
}

module.exports = { register, login, refresh };
