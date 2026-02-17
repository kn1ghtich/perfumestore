const prisma = require('../../config/prisma');

async function listMyOrders(req, res, next) {
  try {
    const orders = await prisma.order.findMany({
      where: { userId: req.user.id },
      include: { items: true },
      orderBy: { createdAt: 'desc' }
    });

    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
}

module.exports = { listMyOrders };
