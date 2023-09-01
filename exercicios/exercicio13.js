function parimpar(num) {
    if (num % 2 == 0) {
      return `${num}: Par`;
    } else {
      return `${num}: Ímpar`;
    }
}
  
module.exports = { parimpar };