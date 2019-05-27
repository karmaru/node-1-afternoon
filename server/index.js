const express = require('express')

// const products = require('../package.json')

const getProducts = require('./getProducts')
const getProduct = require('./getProduct')

const app = express()

const port = 5000

app.get('/api/products', getProducts);

app.get('/api/product/:id', getProduct)

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})

