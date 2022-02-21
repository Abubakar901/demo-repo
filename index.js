const express = require('express');
const app = express()
const users = require('./Users')

const PORT = process.env.PORT || 5000;


app.get('/', function(req, res) {
    res.json(users)
});


app.listen(PORT, () => console.log(`App listening on Port ${PORT}`))