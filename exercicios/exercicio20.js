function valorlIPI(porcentagem, vp1, qntp1, vp2, qntp2) {
    let valortotal = (vp1 * qntp1 + vp2 * qntp2) * (porcentagem / 100 + 1);
  
    return valortotal;
  }
  
  module.exports = { valorlIPI };