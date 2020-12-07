const express = require('express');

const router = express.Router();

const userProfile = require('../controllers/prac_controller')

router.get('/profile', userProfile.user);

module.exports =router;