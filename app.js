//const express = require('express');
import express from 'express';
const app = express();
const port = 5300;

//definir el motor a trabajar
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let products = [
        { ref: "A1", descripcion: 'Mouse', precio: 25000, estado: true },
        { ref: "B1", descripcion: 'Teclado', precio: 50000, estado: false },
        { ref: "C1", descripcion: 'Monitor', precio: 35000, estado: true },
    ]
    res.render('pages/index', { products: products })
})

app.get('/about', (req, res) => {
    let titulo = "Mision";
    let subtitulo = "Mision";
    res.render('pages/about', { titulo: titulo, subtitulo: subtitulo })
})

app.listen(port, () => {
    console.log(`Server in http://localhost:${port}`);
})
