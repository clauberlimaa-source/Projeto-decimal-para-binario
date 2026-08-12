// Exemplo para uma função que converte binário para decimal
// Supondo que você tenha uma função exportada em um arquivo conversor.js

const converter = require('./conversor'); // ajuste o caminho

describe('Conversor Binário para Decimal', () => {
    test('converte 1010 para 10', () => {
        expect(converter.binarioParaDecimal('1010')).toBe(10);
    });

    test('converte 1111 para 15', () => {
        expect(converter.binarioParaDecimal('1111')).toBe(15);
    });

    test('converte 0 para 0', () => {
        expect(converter.binarioParaDecimal('0')).toBe(0);
    });
});