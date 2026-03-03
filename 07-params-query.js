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


app.listen(5000, () => {
    console.log('Server is listening on port 5000...')
})