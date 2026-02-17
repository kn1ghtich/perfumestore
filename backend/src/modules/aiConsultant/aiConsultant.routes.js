const express = require('express');
const { requireAuth } = require('../../middlewares/auth.middleware');
const { askConsultant } = require('./aiConsultant.controller');

const router = express.Router();

router.post('/chat', requireAuth, askConsultant);

module.exports = router;
