const express = require('express');
const mongoose = require('mongoose');
var cors = require("cors");
const bodyParser = require('body-parser');
const FAQModel = require('./src/models/FAQ');
const ProductModel = require('./src/models/Product');
const DB_URI = "mongodb://127.0.0.1:27017/thesnuslifedb";

const app = express();
const port = 5000;
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(DB_URI)
    .then(() => console.log('MongoDB connected successfully!'))
    .catch((err) => console.log(err));

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/faqs', async (req, res) => {
    try {
        const faqs = await FAQModel.find();
        console.log(faqs);
        res.json(faqs);
    } catch (err) {
        res.status(500).send(err.message);
    }
});
app.get('/products', async (req, res) => {
    let receivedData = req.body;
    console.log(receivedData);

    try {
        const products = await ProductModel.find();
        console.log(products);
        res.json(products);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
});