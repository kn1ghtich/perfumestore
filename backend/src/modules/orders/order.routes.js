const express = require('express');
const { requireAuth } = require('../../middlewares/auth.middleware');
const { listMyOrders } = require('./order.controller');

const router = express.Router();

router.get('/my', requireAuth, listMyOrders);

module.exports = router;
