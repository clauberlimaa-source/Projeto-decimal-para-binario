// conversor.js
function decimalParaBinario(decimal) {
    return decimal.toString(2);
}

function decimalParaHexadecimal(decimal) {
    return decimal.toString(16).toUpperCase();
}

module.exports = { decimalParaBinario, decimalParaHexadecimal };