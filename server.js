const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const db = require('./queries')

app.use(bodyParser.urlencoded({ extended: true }))


app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({ "message": "Hello World" });
});

// listen for requests
app.listen(port, () => {
    console.log(`Node server is listening on port ${port}`);
});

app.get('/books', db.getUsers)

app.get('/book/:id', db.getUserById )

app.post('/book', db.createUser)



app.put('/book/:id', db.updateUser)


app.delete('/book/:id', (req, res) => {


})