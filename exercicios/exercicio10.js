function imc (genero, altura) {
    if (genero == "H") {
      return 72.7 * altura - 58;
    } else if (genero == "M") {
      return 62.1 * altura - 44.7;
    } else {
      return `inválido`;
    }
}
  
  module.exports = { imc };
  