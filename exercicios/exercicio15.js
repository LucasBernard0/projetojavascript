function verificarTriangulo(num1, num2, num3, h) {
    if (num1 + num2 > num3 && num1 + num3 > num2 && num2 + num3 > num1) {
      return `Área: ${(num1 * h) / 2}`;
    } else {
      return `${num1}, ${num2} e ${num3} não formam um triângulo`;
    }
}
  
module.exports = { verificarTriangulo };
  