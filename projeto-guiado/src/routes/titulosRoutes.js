const express = require('express')
const router = express.Router()

const controller = require('../controllers/tituloController')

// Criar um título -> POST -> save()
router.post('/', controller.criaTitulo)

//Ler todos os títulos -> GET -> find()
router.get('/', controller.mostraTitulos)

//Ler todos os títulos -> da Marvel -> GET -> find()
router.get('/marvel', controller.mostraTitulosMarvel)

//Ler todos os títulos -> da Pixar -> GET -> find()
router.get('/pixar', controller.mostraTitulosPixar)

//Ler todos os títulos -> da Ghibli -> GET -> find()
router.get('/ghibli', controller.mostraTitulosGhibli)

//Atualizar um título

//Deletar um título

module.exports = router