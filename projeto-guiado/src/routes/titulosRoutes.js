const express = require('express')
const router = express.Router()

const controller = require('../controllers/tituloController')

// Criar um título -> POST -> save()
router.post('/', controller.criaTitulo)

//Ler todos os títulos -> GET -> find()
router.get('/', controller.mostraTitulos)

//Ler todos os títulos -> da Marvel -> GET -> find()

//Ler todos os títulos -> da Pixar -> GET -> find()

//Ler todos os títulos -> da Ghibli -> GET -> find()

//Atualizar um título

//Deletar um título

module.exports = router