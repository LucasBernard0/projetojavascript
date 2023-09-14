function juroscapital(capital, taxa, tempo) {
    let juros = capital * taxa * tempo;
    let montante = capital + juros;
  
    return `Capital: ${capital} | Juros: ${juros} | Montante: ${montante}`;
}
  
module.exports = { juroscapital };