//Requisição ou chamando 
const express = require('express');

//Mexer com diretórios
const path = require('path')

//Estanciando
const app = express();

//Setar e reenderizar tudo
app.set("view engine","ejs");


app.get("/", function (req, res){
    res.render("index");
}) 

//Public está guardando todos os diretórios
app.use(express.static(path.join(__dirname,"public")))

//Executar quando chamar 8080 com o localhost
app.listen(8080);
console.log("Rodando");