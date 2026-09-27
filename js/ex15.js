var n, q

n = parseInt(prompt("Informe oque gostaria:\n1 - Hambúrguer - R$ 15,00\n2 - Cachorro-quente - R$ 12,00\n3 - Pizza - R$ 20,00\n4 - Refrigerante - R$ 6,00"))

q = parseInt(prompt("Informe a quantidade: "))

switch (n) {
    case 1:
        alert("Valor total da compra: R$ " + (15 * q))
        break;
    case 2:
        alert("Valor total da compra: R$ " + (12 * q))
        break;
    case 3:
        alert("Valor total da compra: R$ " + (20 * q))
        break;
    case 4:
        alert("Valor total da compra: R$ " + (6 * q))
        break;
    default:
        alert("Produto inválido.")
        break;
}