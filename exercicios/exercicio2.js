function salario (vh, qh) {
    if(isNaN(vh) || isNaN(qh)) {
        throw new Error("Informe um número!");
    }
    return vh * qh;
}

module.exports ={salario}