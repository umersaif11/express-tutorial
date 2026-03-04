const express = require('express')
const app = express()
const {products} = require('./data')

app.get('/', (req, res) => {
    res.send(
        '<h1>Home page</h1><a href="/api/products">products</a>'
    )
})
app.get('/api/products', (req, res) => {
    const newProducts = products.map(product => {
        const {id, name, image} = product
        return {id, name, image}
    })
    res.json(newProducts)
})
app.get('/api/products/:productID', (req, res) => {
    const {productID} = req.params
    const singleproduct = products.find(product => (
        product.id === Number(productID)
    ))
    if(!singleproduct) {
        return res
        .status(404)
        .send('Product does not exist')
    }
    res.json(singleproduct)
})
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params)
    res.send('Hello World')
})
app.get('/api/v1/query', (req, res) => {
    const {search, limit} = req.query
    let sortedProducts = [...products]

    if(search) {
        sortedProducts = sortedProducts.filter(product => (
            product.name.startsWith(search)
        ))
    }
    if(limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    res.status(200).json(sortedProducts)
    // res.send('Hello World')
})


app.listen(5000, () => {
    console.log('Server is listening on port 5000...')
})