const express = require('express')
const SiteController = require('../app/controllers/SiteController')
const router = express.Router()

// newsController.index

router.use('/search', SiteController.search)
router.use('/', SiteController.home)

module.exports = router