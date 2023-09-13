function custocarro(custofabrica) {
    let pdistribuidor = 0.28;
    let imposto = 0.45;
  
    return custofabrica + custofabrica * pdistribuidor + custofabrica * imposto;
}
  
module.exports = { custocarro };