const mongoose = require('mongoose')
const Titulo = require('../models/titulo')

const criaTitulo = async(req, res) => {
    const titulo = new Titulo({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        genero: req.body.genero,
        descricao: req.body.descricao,
        estudio: req.body.estudio,
    })

    //lembrar de fazer a regra que nao permite criar um titulo que ja existe
    const tituloJaExiste = await Titulo.findOne({ nome: req.body.nome })
    if (tituloJaExiste) {
        return res.status(409).json({ error: "Título  já cadastrado!" })
    }

    try {
        const novoTitulo = await titulo.save()
        return res.status(201).json(novoTitulo)
    } catch (err) {
        return res.status(400).json({ message: error.message })
    }
}

const mostraTitulos = async(req, res) => {
    const titulos = await Titulo.find().populate('estudio')
    return res.status(200).json(titulos)
}

const mostraTitulosMarvel = async(req, res) => {
    const titulos = await Titulo.find().populate('estudio')
    const titulosFiltrado = titulos.filter(titulo => titulo.estudio.nome == "Marvel")

    return res.status(200).json(titulosFiltrado)
}

const mostraTitulosPixar = async(req, res) => {
    const titulos = await Titulo.find().populate('estudio')
    const titulosFiltrado = titulos.filter(titulo => titulo.estudio.nome == "Pixar")

    return res.status(200).json(titulosFiltrado)
}

const mostraTitulosGhibli = async(req, res) => {
    const titulos = await Titulo.find().populate('estudio')
    const titulosFiltrado = titulos.filter(titulo => titulo.estudio.nome == "Ghibli")

    return res.status(200).json(titulosFiltrado)
}
module.exports = {
    criaTitulo,
    mostraTitulos,
    mostraTitulosMarvel,
    mostraTitulosPixar,
    mostraTitulosGhibli
}