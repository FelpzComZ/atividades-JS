var p, q, vt, v, tipo, n

p = parseInt(prompt("Informe qual produto deseja:\n1 - Camiseta - R$ 50,00\n2 - Calça - R$ 100,00\n3 - Tênis - R$ 200,00"))

q = parseInt(prompt("Informe a quantidade:"))

switch (p) {
    case 1:
        vt = 50 * q
        tipo = "Camiseta"
        break;
    case 2:
        vt = 100 * q
        tipo = "Calça"
        break;
    case 3:
        vt = 200 * q
        tipo = "Tênis"
        break;
    default:
        alert("ERRO!")
        break;
}

n = parseInt(prompt("Informe o metodo de pagamento:\n1 - Pix: 10% de desconto.\n2 - Dinheiro: 5% de desconto.\n3 - Cartão: sem desconto."))

switch (n) {
    case 1:
        v = vt * 0.10
        break;
    case 2:
        v = vt * 0.05
        break;
    case 3:
        v = 0
        break;
    default:
        alert("ERRO!")
        break;
}

alert("Produto escolhido: " + tipo + "\nQuantidade: " + q + "\nSubtotal: " + vt + "\nValor do desconto: " + v + "\nValor final da compra: " + (vt - v))