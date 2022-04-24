const express = require('express')
const router = express.Router()
const omiserouter = require('./middleware/omise')
router.use('/',omiserouter)


module.exports = router