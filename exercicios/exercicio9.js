function medianotas (nota1, nota2, nota3) {
    const media = (nota1 + nota2 + nota3) /3
    
    if(media >= 7){
        console.log('Aprovado')
    }else if (media < 7 && media <= 5) {
        console.log ('Recuperação')
    }else {
        console.log('Reprovado')
    }
}

module.exports = { medianotas };