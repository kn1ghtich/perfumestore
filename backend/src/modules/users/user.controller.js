const prisma = require('../../config/prisma');

async function me(req, res, next) {
  try {
    const user = await prisma.user.findUnique({ where: { id: req.user.id } });
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
}

module.exports = { me };
