function operacao (operacao, num1, num2) {
    switch (operacao) {
        case "+":
            return `${num1} + ${num2} = ${num1 + num2}`;
        
        case "-":
            return `${num1} - ${num2} = ${num1 - num2}`;
            
        case "/":
            return `${num1} / ${num2} = ${num1 / num2}`;
            
        case "*":
            return `${num1} * ${num2} = ${num1 * num2}`;
            
        default:
            return `operacao invalida`    
    }
}

module.exports = { operacao };
