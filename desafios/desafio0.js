function idade(num1){
    let input = num1;

    let m = input * 12;
    input = input - m / 12;

    let d = input;

    return `${m} meses e ${d} dias`;
}

module.exports = { idade };
