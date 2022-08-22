/* IMPORTAÇÃO DO PACOTE EXPRESS: */
const express = require('express');

//Importação da controller categoria de livros
const categoriaController = require('./controller/CategoriaController')

/* CRIAÇÃO DE UMA INSTANCIA EXECUTAVEL DO EXPRESS */
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

// Rotas de categorias
console.log('Passou pela index');
app.use('/',categoriaController)

/* 

ROTA RAIZ DO VERBO HTTP GET:
PARAMETROS DE ROTAS (QUALQUER VERBO):
1 - NOME DA ROTA
2 - CALLBACK QUE TRATA REQUISIÇÃO (req) E RESPOSTA (res)
*/
/* app.get('/', (req, res)=>{

    console.log('ROTA RAIZ DE VERBO HTTP GET!');
    res.send('ROTA RAIZ DE VERBO HTTP GET!');

}); */
/* 
app.get('/teste', (req, res)=>{

    console.log('ROTA DE TESTE DE VERBO HTTP GET!');
    res.send('ROTA DE TESTE DE VERBO HTTP GET!');

}); */

/* 
CRIAÇÃO DO SERVIDOR DE REQUISIÇÕES HTTP DA APLICAÇÃO 
PARAMETROS DO LISTEN
1 - PORTA LÓGICA QUE RECEBE AS REQUISIÇÕES
2 - CALLBACK - ARROW ANONIMA (OPCIONAL)
*/

app.listen(3000, ()=>{
    console.log('SERVIDOR RODANDO EM: http://localhost:3000');
});