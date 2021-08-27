const express = require("express")
const app = express()
var users = require('./user');

app.use(express.json());
app.get('/users', (req, res) => {
    res.json(users.list())
})

app.post('/login', (req, res) => {
    const { usuario, password } = req.body
    res.json(users.find(usuario, password))
})

app.listen(3000, () => console.log("Servidor listo ..."))