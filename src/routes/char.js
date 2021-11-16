const express = require('express');
const router = express.Router();

const charController = require('../app/controller/charController');

//Route
router.get('/create', charController.create);
router.post('/store', charController.saveChar);
router.get('/:name', charController.detail);

module.exports = router;
