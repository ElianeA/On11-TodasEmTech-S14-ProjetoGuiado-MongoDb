const express = require('express')
const router = express.Router()

const controller = require('../controllers/estudiosController')

//create ->POST -> save()
router.post('/', controller.criaEstudio)

//read -> GET -> find()
router.get('/', controller.mostraEstudios)

//update -> PATCH -> getById9() ou findOne() e save()

//delete -> 

module.exports = router