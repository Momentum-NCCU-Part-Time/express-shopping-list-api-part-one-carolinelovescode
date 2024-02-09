const express = require('express');
const mongoose = require('mongoose');

const app = express();

const ShoppingLists = require("./models/ShoppingLists")

app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})



app.get('/shoppinglists', (req, res) => {
    ShoppingLists.find().then((results) => res.status(200).json(resilts));
});
