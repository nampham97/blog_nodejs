const express = require('express');
const router = express.Router();

const newController = require('../app/controller/newsController');

//Route
router.get('/:slug', newController.detail);
router.get('/', newController.index);

module.exports = router;
