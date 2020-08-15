const express = require('express')
const router = express.Router()

const PersonnelControl = require('../controllers/PersonnelControl')
// const authentication = require('../middleware/authentication')
// const authorization = require('../middleware/authorization')

router.post('/create',  PersonnelControl.create)
router.get('/show',  PersonnelControl.show)
router.get('/show/:id',  PersonnelControl.showOne)
router.put('/edit/:id',  PersonnelControl.edit)
router.delete('/delete/:id',  PersonnelControl.delete)


module.exports = router