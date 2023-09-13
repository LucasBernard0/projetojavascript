function anobissexto(ano) {
    if (ano % 4 === 0) {
      if (ano % 100 !== 0 || ano % 400 === 0) {
        return `${ano} é bissexto`;
      } else {
        return `${ano} não é bissexto`;
      }
    } else {
      return `${ano} não é bissexto`;
    }
}
  
module.exports = { anobissexto };