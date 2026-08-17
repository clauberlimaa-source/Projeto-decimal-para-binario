const express = require("express");
const validateDecimalParam = require("./validateDecimal");
const { decimalParaBinario, decimalParaHexadecimal } = require("./conversor");

const app = express();

// Rota para binário
app.get("/to-binary/:decimal", validateDecimalParam, (req, res) => {
    const binary = decimalParaBinario(req.decimal);
    res.json({ decimal: req.decimal, binary });
});

// Rota para hexadecimal
app.get("/to-hex/:decimal", validateDecimalParam, (req, res) => {
    const hex = decimalParaHexadecimal(req.decimal);
    res.json({ decimal: req.decimal, hex });
});

module.exports = app;