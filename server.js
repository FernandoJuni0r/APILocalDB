const { send } = require('express/lib/response')
const http    = require('http')
const port    = process.env.PORT || 3000
const app     = require('./app')
const client  = require('./Database')
const server  = http.createServer(app)


server.listen(port)

client.connect()

app.get('/login', (req, res)=>{
   const email = req.body.email
   const pass  = req.body.pass

    client.query("Select id from login where email ='"+email+"' and senha='"+pass+"'", (err, result)=>{
        if(!err){
            if (result.rows.length != 1){
                res.send(false)
            }
            else{
                res.send(true)
            }
        }
        else{
            console.log(err.message)

        }
    })
    client.end
})

//      {                                               sintaxe para insert no banco
//          "titulo": "machado de asis",
//          "autor": "asis machado",
//          "link": "https://daskjdaldjasdaksdl",
//           "editora": "cultura"
//      }


app.post('/cadastro_livros', (req, res)=>{

    const titulo  = req.body.titulo
    const autor   = req.body.autor
    const editora = req.body.editora
    const link    = req.body.link

    client.query("INSERT INTO catalogo_livros (titulo, autor, editora, link) VALUES ( '"+titulo+"' , '"+autor+"' , '"+editora+"', '"+link+"' )", (err, result)=>{
        if(!err){
            res.send('Cadastro de livro Realizado com sucesso')
        }
        else{
            console.log(err.message)
        }
    })
})

app.post('/cadastro_usuario', (req, res)=>{

    const nome   = req.body.nome
    const email  = req.body.email
    const senha  = req.body.senha

    client.query("INSERT INTO login (nome, email, senha) VALUES ( '"+nome+"' , '"+email+"' , '"+senha+"' )", (err, result)=>{
        if(!err){
            res.send('Cadastro de usuario Realizado com sucesso')
        }
        else{
            console.log(err.message)
        }
    })
})

