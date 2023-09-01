function Nmrpositivonegativo (num){
    if (num > 0) {
        return `${num}: Positivo`;
      } else if (num < 0) {
        return `${num}: Negativo`;
      } else {
        return `${num}: Neutro`;
      }
}

module.exports = { Nmrpositivonegativo };
