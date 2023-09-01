const express = require('express')
const { somar } = require ('./exercicios/exercicio1.js')
const { salario } = require ('./exercicios/exercicio2.js')
const { mediapesos } = require ('./exercicios/exercicio3.js')
const { temperatura } = require ('./exercicios/exercicio4.js')
const { milhas } = require ('./exercicios/exercicio5.js')
const { duracao } = require ('./exercicios/exercicio6.js')
const { distancia } = require ('./exercicios/exercicio7.js')
const { tabuada } = require ('./exercicios/exercicio8.js')
const { medianotas} = require ('./exercicios/exercicio9.js')
const { idade } = require ('./exercicios/exercicio9.js')









const app = express()
app.use (express.json())
const port = 3000

// EXERCICIO 1

app.post('/api/exercicio1', (req, res) => {
    const result = somar (req.body.num1, req.body.num2)
    

    res.json({
        message: `resultado: ${result}`
    })
})

// EXERCICIO 2

app.post('/api/exercicio2', (req, res) => {
    const result = salario (req.body.vh, req.body.qh)
    

    res.json({
        message: `salario: ${result}`
    })
})

app.post('/api/exercicio3', (req, res) => {
    const result = mediapesos (req.body.peso1, req.body.peso2, req.body.peso3, req.body.peso4, req.body.peso5)

    res.json({
        message: `mediapesos: ${result}`
    })
})

app.post('/api/exercicio4', (req, res) => {
    const result = temperatura (req.body.c)

    res.json({
        message : `temperatura: ${result}`
    })
})

app.post ('/api/exercicio5', (req, res) => {
    const result = milhas (req.body.milhas)

    res.json({
        message : `milhas: ${result}`
    })
})

app.post ('/api/exercicio6', (req, res) => {
    const result =  duracao (req.body.segundos)

    res.json({
        message : `duracao: ${result}`
    })
})

//n foi 
app.post ('/api/exercicio7', (req, res) => {
    //const valorKM = converterMt (req.body.km)
    //const valorKM = coverterCm(req.body.km)

    res.json({
        message : `distancia: ${result}`
    })
})

app.post ('/api/exercicio8',(req, res) => {
    const result = tabuada (req.body.tabuada)

    res.json({
        message : "tabuada",
        results : result,
    })
})

app.post('/api/exercicio9', (req, res) => {
    const result = medianotas (req.body.nota1, req.body.nota2, req.doby.nota3 )

    res.json({
        message : `medianotas: ${result}`
    })
})

app.post ('/api/exercicio10', (req, res) => {
    const result = imc (req.imc)

    res.json({
        message: `imc: ${result}`
    })
    
})

app.post('/api/desafio0', (req, res)=>{
    const result = idade(req.body.num1);
    res.status(200).json({
        message: `Essa idade representa ${result}`
    });
});

app.post('/api/desafio1', (req, res)=>{
    const result = troca(req.body.num1, req.body.num2);
    res.status(200).json({
        message: `A variáveis foram trocadas, ${result}`
    });
});

app.post('/api/desafio2', (req, res)=>{
    const result = maior(req.body.num1, req.body.num2);
    res.status(200).json({
        message: `O maior numero é o: ${result}`
    });
});

app.listen(3000, () => {
    console.log(`Servidor na porta 3000`)
})