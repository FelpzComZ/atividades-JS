var m, n

m = parseFloat(prompt("Informe uma medida em metros: "))

n = parseInt(prompt("Informe oque deseja fazer:\n1 - Converter para centímetros\n2 - Converter para milímetros\n3 - Converter para quilômetros"))

switch (n) {
    case 1:
        alert("O valor em centimetros: " + (m * 100))
        break;
    case 2:
        alert("O valor em milimétros: " + (m * 1000))
        break;
    case 3:
        alert("O valor em quilômetros: " + (m / 1000))
        break;
    default:
        alert("Opção inválida.")
        break;
}