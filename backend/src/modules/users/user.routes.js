const express = require('express');
const { requireAuth } = require('../../middlewares/auth.middleware');
const { me } = require('./user.controller');

const router = express.Router();

router.get('/me', requireAuth, me);

module.exports = router;
