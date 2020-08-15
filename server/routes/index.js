const express = require('express')
const router = express.Router()

const PersonnelRouter = require('./personnelRouter')

router.use('/personnel', PersonnelRouter)

module.exports = router