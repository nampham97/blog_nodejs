const express = require('express');
const router = express.Router();

const sitesController = require('../app/controller/sitesController');

//Route
router.get('/search', sitesController.search);

router.get('/', sitesController.index);

module.exports = router;
