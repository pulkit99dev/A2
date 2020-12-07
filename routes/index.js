const express = require('express');

const router = express.Router();

const homeController = require('../controllers/home_controller')
const pracController = require('../controllers/prac_controller')

router.get('/', homeController.home);

router.get('/practice', pracController.prac);

router.use('/user', require('./user'));

router.use('/posts', require('./posts'));

module.exports = router;