const { decimalParaBinario, decimalParaHexadecimal } = require('./conversor');

describe('Conversor Decimal', () => {
    test('decimalParaBinario(10) retorna "1010"', () => {
        expect(decimalParaBinario(10)).toBe('1010');
    });

    test('decimalParaBinario(15) retorna "1111"', () => {
        expect(decimalParaBinario(15)).toBe('1111');
    });

    test('decimalParaBinario(0) retorna "0"', () => {
        expect(decimalParaBinario(0)).toBe('0');
    });

    test('decimalParaHexadecimal(10) retorna "A"', () => {
        expect(decimalParaHexadecimal(10)).toBe('A');
    });

    test('decimalParaHexadecimal(255) retorna "FF"', () => {
        expect(decimalParaHexadecimal(255)).toBe('FF');
    });

    test('decimalParaHexadecimal(0) retorna "0"', () => {
        expect(decimalParaHexadecimal(0)).toBe('0');
    });
});