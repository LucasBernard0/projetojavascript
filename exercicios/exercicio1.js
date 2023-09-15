function somar (num1, num2) {
    if(isNaN(num1) || IsNaN(num2)) {
        throw new Error("Informe o número!");
    }
    const resultado = num1 + num2
    
    return num1 + num2
}

module.exports ={somar}