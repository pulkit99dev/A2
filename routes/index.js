const express = require('express');

const router = express.Router();

const homeController = require('../controllers/home_controller')
const pracController = require('../controllers/prac_controller')

router.get('/', homeController.home);

router.get('/practice', pracController.prac);

module.exports = router;