function troca(num1, num2){
    let aux = num2;
    num2 = num1;
    num1 = aux;

    return `num1 = ${num1} e num2 = ${num2}`;
}

module.exports= { troca };
