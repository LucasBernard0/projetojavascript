// EXERCICIOS
const express = require('express')
const { somar } = require ('./exercicios/exercicio1.js')
const { salario } = require ('./exercicios/exercicio2.js')
const { mediapesos } = require ('./exercicios/exercicio3.js')
const { temperatura } = require ('./exercicios/exercicio4.js')
const { milhas } = require ('./exercicios/exercicio5.js')
const { duracao } = require ('./exercicios/exercicio6.js')
const { distancia } = require ('./exercicios/exercicio7.js')
const { tabuada } = require ('./exercicios/exercicio8.js')
const { medianotas } = require ('./exercicios/exercicio9.js')
const { imc } = require ('./exercicios/exercicio10')
const { operacao } = require ('./exercicios/exercicio11.js')
const { Nmrpositivonegativo } = require ('./exercicios/exercicio12.js')
const { parimpar } = require ('./exercicios/exercicio13.js')



// DESAFIOS
const { idade } = require ('./desafios/desafio0.js')
const { troca } = require ('./desafios/desafio1.js')
const { maior } = require ('./desafios/desafio2.js')

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

// EXERCICIO 3

app.post('/api/exercicio3', (req, res) => {
    const result = mediapesos (req.body.peso1, req.body.peso2, req.body.peso3, req.body.peso4, req.body.peso5)
    
    res.json({
        message: `mediapesos: ${result}`
    })
})

// EXERCICIO 4

app.post('/api/exercicio4', (req, res) => {
    const result = temperatura (req.body.c)

    res.json({
        message : `temperatura: ${result}`
    })
})

// EXERCICIO 5

app.post ('/api/exercicio5', (req, res) => {
    const result = milhas (req.body.milhas)

    res.json({
        message : `milhas: ${result}`
    })
})

// EXERCICIO 6

app.post ('/api/exercicio6', (req, res) => {
    const result =  duracao (req.body.segundos)

    res.json({
        message : `duracao: ${result}`
    })
})

// EXERCICIO 7

app.post ('/api/exercicio7', (req, res) => {
    const valorKM = converterMt (req.body.km)
    const valorCM = coverterCm (req.body.km)

    res.json({
        message : `distancia: ${result}`
    })
})

// EXERCICIO 8

app.post ('/api/exercicio8',(req, res) => {
    const result = tabuada (req.body.tabuada)

    res.json({
        message : "tabuada",
        results : result,
    })
})

// EXERCICIO 9

app.post ('/api/exercicio9', (req, res) => {
    const result = medianotas (req.body.nota1, req.body.nota2, req.doby.nota3)

    res.json({
        message : `mediaNotas: ${result}`
    })
})

// EXERCICIO 10

app.post ('/api/exercicio10', (req, res) => {
    const result = imc (req.body.genero, req.body.alutra)

    res.json({
        message: `imc: ${result}`
    })
    
})

// DESAFIO 0

app.post ('/api/desafio0', (req, res) => {
    const result = idade(req.body.num1)
    
    res.json({
        message: `idade ${result}`
    });
});

// DESAFIO 1

app.post ('/api/desafio1', (req, res) => {
    const result = troca(req.body.num1, req.body.num2)
    
    res.json({
        message: `troca ${result}`
    });
});

// DEASAFIO 2

app.post ('/api/desafio2', (req, res) => {
    const result = maior(req.body.num1, req.body.num2)
    
    res.json({
        message: `maior ${result}`
    });
});

// EXERCICIO 11

app.post ('/api/exericio11', (req, res) => {
    const result = operacao (req.body.operacao, req.body.num1, req.body.num2)

    res.json({
        message: `operacao ${result}`
    })
})

// EXERCICIO 12

app.post ('/api/exercicio12', (req, res) => {
    const result = Nmrpositivonegativo (req.body.num)

    res.json({
        message: `Nmrpositivonegativo ${result}`
    })
})

// EXERCICIO 13

app.post ('/api/exercicio13', (req, res) => {
    const result = parimpar (req.body.num)

    res.json({
        message: `parimpar ${result}`
    })
})



app.listen(3000, () => {
    console.log(`Servidor na porta 3000`)
})