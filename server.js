const http = require('http')
const port = process.env.PORT || 3000
const server = http.createServer()
const app = require('./app')

app.use('/', (req, res, next) =>{
    res.status(200).send({
        mensagem: 'correto'
    })
})

app.get('/consulta', (req, res, next) =>{
    res.status(200).send({
        mensagem: 'correto'
    })
})

app.post('/insert', (req, res, next) =>{
    res.status(200).send({
        mensagem: 'ta'
    })
})

server.listen(port)