const prisma = require('../../config/prisma');

async function listProducts(_req, res, next) {
  try {
    const products = await prisma.product.findMany({
      where: { isActive: true },
      orderBy: { createdAt: 'desc' }
    });

    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
}

module.exports = { listProducts };
