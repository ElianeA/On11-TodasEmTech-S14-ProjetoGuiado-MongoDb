const express = require('express')
const app = express()

const db = require('./src/data/database')
db.connect()

const titulo = require('./src/routes/titulosRoutes')
const estudio = require('./src/routes/estudiosRoutes')

app.use(express.json())

app.use('/titulos', titulo)
app.use('/estudios', estudio)

app.listen(4444, () => console.log('Servidor rodando!'))