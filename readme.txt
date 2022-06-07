Lembre-se sempre antes de realizar qualquer coisa ligue o servidor local com um "npm start" dentro do terminal no arquivo server.js


Modelo de requisiçao get: (/login)

{
    "email":
    "nome do email",
    "pass":
    "senha"
}

retorno do Get:
TRUE : em casos de usuario e senha localizados
FALSE: em caso de usuario e senha nao localizados ou achados em duplicidade



Modelo de requisiçao post: (/cadastro_livros)
{
   "titulo": "nome livro",
   "autor": "nome autor",
   "link": "url",
   "editora": "edt"
}
retorno do post /cadastro_livros:
TRUE : em caso de sucesso na inserçao do banco
FALSE: para todos os demais casos

Modelo de requisiçao post: (/cadastro_usuario)
{
   "nome": "nome do usuario",
   "email": "email para login",
   "senha": "senha para login"
}
retorno do post /cadastro_usuario:
TRUE : em caso de sucesso na inserçao do banco
FALSE: para todos os demais casos
