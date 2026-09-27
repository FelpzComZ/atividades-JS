var n, q, vt, v, tipo

n = parseInt(prompt("1 - Gasolina - R$ 6,20 por litro\n2 - Etanol - R$ 4,30 por litro\n3 - Diesel - R$ 6,00 por litro"))

q = parseFloat(prompt("Informe quantos litros:"))

switch (n) {
    case 1:
        vt = 6.2 * q
        tipo = "Gasolina"
        break;
    case 2:
        vt = 4.3 * q
        tipo = "Etanol"
        break;
    case 3:
        vt = 6 * q
        tipo = "Diesel"
        break;
    default:
        break;
}

if (vt > 200) {
    v = vt * 0.05
} else {
    v = 0
}

alert("Combutivel escolhido: " + tipo + "\nA quantidade de litros: " + q + "\nValor antes do desconto: " + vt + "\nValor do desconto: " + v + "\nValor final da compra: " + (vt - v))