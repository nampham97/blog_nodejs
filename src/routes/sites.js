const express = require('express')
const router = express.Router()

const sitesController = require('../app/controller/sitesController')

  //Route
  router.use('/search', sitesController.search)
  
  router.use('/', sitesController.index)

module.exports = router;
