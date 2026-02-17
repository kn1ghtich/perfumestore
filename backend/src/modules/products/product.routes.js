const express = require('express');
const { listProducts } = require('./product.controller');

const router = express.Router();

router.get('/', listProducts);

module.exports = router;
