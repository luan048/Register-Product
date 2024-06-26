import express from 'express'
import cors from 'cors'

const server = express()

const products = []

server.use(express.json())
server.use(cors())

server.get('/home', (req, res) => {
    res.json(products)
})

server.post('/home', (req, res) => {
    console.log(req.body)

    const newRequeste = req.body
    products.push(newRequeste)

    res.status(201).json(newRequeste)
})

server.delete('/home:id', (req, res) => {
    const productId = req.params.id


})

server.listen({
    port: 3000
})
