const express = require('express');

let router = express.Router();

let postController = require('../controllers/post_controller');

router.get('/poster', postController.post);

module.exports = router;