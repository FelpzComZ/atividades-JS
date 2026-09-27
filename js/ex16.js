var v, n

v = parseFloat(prompt("Informe o valor da compra: "))

n = parseInt(prompt("Informe o metodo de pagamento:\n1 - Pix\n2 - Dinheiro\n3 - Cartão à vista\n4 - Cartão parcelado"))

switch (n) {
    case 1:
        alert("Valor final da compra: " + (v - v * 0.10))
        break;
    case 2:
        alert("Valor final da compra: " + (v - v * 0.05))
        break;
    case 3:
        alert("Valor final da compra: " + v)
        break;
    case 4:
        alert("Valor final da compra: " + (v + v * 0.10))
        break;
    default:
        alert("Forma de pagamento inválida.")
        break;
}