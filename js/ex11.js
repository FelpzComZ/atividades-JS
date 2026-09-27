var v

v = parseFloat(prompt("Informe o valor da compra: "))

if (v >= 200) {
    v -= v * 0.10
    alert("Voce recebeu um desconto de 10%, sua compra ficou no valor de: " + v)
} else {
    alert("Sua compra ficou no valor de: " + v)
}