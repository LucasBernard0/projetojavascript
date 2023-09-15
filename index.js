// EXERCICIOS
const express = require('express')
const router = require('./src/routes/exercicio1.js')
// const { somar } = require ('./exercicios/exercicio1.js')
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
const {nmrmaior} = require ('./exercicios/exercicio14.js')
const {verificarTriangulo} = require ('./exercicios/exercicio15.js')
const {calcularimposto} = require ('./exercicios/exercicio16.js')
const {mediaaluno} = require ('./exercicios/exercicio17.js')
const {custocarro} = require ('./exercicios/exercicio18.js')
const {juroscapital} = require ('./exercicios/exercicio19.js')
const {valorlIPI} = require ('./exercicios/exercicio20.js')




// DESAFIOS
const { idade } = require ('./desafios/desafio0.js')
const { troca } = require ('./desafios/desafio1.js')
const { maior } = require ('./desafios/desafio2.js')
const { anobissexto } = require ('./desafios/desafio4.js')



const app = express()
app.use (express.json())
const port = 3000

// EXERCICIO 1

app.post('/api/exercicio1', (req, res) => {
    try {
        const result = somar (req.body.num1, req.body.num2)
        res.json({
            message: `resultado: ${result}`
        })  
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Não deu bão",
        })
    }
})

// EXERCICIO 2

app.post('/api/exercicio2', (req, res) => {
    try {
        const result = salario (req.body.vh, req.body.qh)
        res.json({
            message: `salario: ${result}`
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Não deu bão",
        })
    }
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

// EXERCICIO 14

app.post ('/api/exercicio14', (req, res) => {
    const result = nmrmaior(req.body.num1, req.body.num2);
    
    res.json({
        message: `nmrmaior ${result}`
    });
});

// EXERCICIO 15

app.post('/api/exercicio15', (req, res) => {
    const result = verificarTriangulo(req.body.num1, req.body.num2, req.body.num3, req.body.h);
  
    res.json({
      message: `verificarTriangulo ${result}`
    });
});

// EXERCICIO 16

app.post('/api/exercicio16', (req, res) => {
    const result = calcularimposto(req.body.CPF, req.body.numdependentes, req.body.rendamensal);
    res.json({
        message: `calcularimposto ${result}`
    });
});

// DESAFIO 3

// DESAFIO 4 

app.post("/api/desafio4", (req, res) => {
    const result = anobissexto(req.body.ano);
  
    res.json({
      message: `anobissexto ${result}`
    });
});

// EXERCICIO 17

app.post("/api/exercicio17", (req, res) => {
    const result = mediaaluno(req.body.nota1, req.body.nota2, req.body.nota3);
  
    res.json({
      message: `mediaalunos ${result}`
    });
});

// EXERCICIO 18

app.post('/api/exercicio18', (req, res) => {
    const result = custocarro(req.body.custofabrica);
  
    res.json({
      message: `custocarro ${result}`
    });
});

// EXERCICIO 19

app.post('/api/ex19', (req, res) => {
    const result = juroscapital(req.body.capital, req.body.taxa, req.body.tempo);
  
    res.json({
      message: `juroscapital ${result}`
    });
});

// EXERCICIO 20

app.post('/api/ex20', (req, res) => {
    const result = valorlIPI(req.body.porcentagem, req.body.vp1, req.body.qntp1, req.body.vp2, req.body.qntp2);
  
    res.json({
      message: `IPI ${result}`
    });
});



app.listen(3000, () => {
    console.log(`Servidor na porta 3000`)
})