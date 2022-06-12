const http = require('http')
const port = process.env.PORT || 5000
const app = require('./app')
const client = require('./Database')
const server = http.createServer(app)

server.listen(port)

client.connect()

app.get('/login', (req, res) => {
    client.query("Select * from login", (err, result) => {
      return res.send(result.rows)  
    })
    client.end
})

app.get('/livros', (req, res)=>{
    client.query("select * from catalogo_livros order by id", (err, result)=>{
        if(!err){
            res.send(result.rows)
        }
        else{
            res.send(console.log(err.message))
        }
    })
    client.end
})

app.post('/cadastro_livros', (req, res) => {
    const titulo = req.body.titulo
    const autor = req.body.autor
    const editora = req.body.editora
    const link = req.body.link
    const linkimagem = req.body.linkimagem

    client.query("INSERT INTO catalogo_livros (titulo, autor, editora, link, linkimagem) VALUES ('"+titulo+"' , '"+autor+"', '"+editora+"', '"+link+"', '"+linkimagem+"')", (err, result) => {
        if(!err){
            res.send(true)
        }
        else{
            console.log(err.message)
            res.send(false)
        }
    })
    client.end
})

app.delete('/delete_livro', (req, res) => {
    const titulo = req.body.titulo

    client.query("delete from catalogo_livros where titulo = '"+titulo+"'", (err, result)=>{
        if(!err){
            res.send(true)
            console.log(titulo)
        }
        else{
            console.log(err.message)
            res.send(false)
        }
    })
    client.end
})


app.put('/update_livro', (req, res)=>{

    const new_linkimagem = req.body.new_linkimagem
    const new_titulo = req.body.new_titulo
    const new_link = req.body.new_link
    const new_autor = req.body.new_autor
    const new_editora = req.body.new_editora

    const cond = req.body.titulo

    client.query("update catalogo_livros set titulo = '"+new_titulo+"', autor = '"+new_autor+"', editora = '"+new_editora+"', linkimagem = '"+new_linkimagem+"', link = '"+new_link+"' where titulo = '"+cond+"'", (err, result)=>{
        if(!err){
            res.send(true)
            console.log(new_titulo, new_autor, new_editora, new_link, new_linkimagem, cond)
        }
        else{
            console.log(err.message)
            res.send(false)
        }
    })
    client.end
})

app.post('/cadastro_usuario', (req, res) => {

    const nome = req.body.nome
    const email = req.body.email
    const senha = req.body.senha

    client.query("INSERT INTO login (nome, email, senha) VALUES ( '"+nome+"' , '"+email+"' , '"+senha+"' )", (err, result)=>{
        if(!err){
            res.send(true)
        }
        else {
            console.log(err.message)
            res.send(false)
        }
    })
    client.end
})