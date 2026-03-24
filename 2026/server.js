//importação a partir de commonJs:
//var express = require("express");

import express from "express";

const app = express();
const porta = 3000;

app.get("/", (request, response) => {
    response.send("olá, mundo!");

});   

app.get("/usuario",  (request, response) =>  {
    response.json({
        id:  1,
        nome: "Livia",
        profissao:"Aluna"

 
  });

});

app.get("/usuarios",  (request, response) =>  {
    response.json([
       {
          id:  1,
          nome: "Maria",
          profissao:"Mecanica"
       },
       {
          
        id:  2,
        nome: "Pedro",
        profissao:"Profesor",


       },
       {
      
        id:  3,
        nome: "Beatriz",
        profissao:"Medica",


      }
       



    ]);

    });


    
    

app.listen(porta, (request, response) => {
    console.log (`Servidor rodando: http://127.0.0.1:${porta}`)
});

