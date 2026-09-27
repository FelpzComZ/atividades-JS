var n1, n2

n1 = parseFloat(prompt("Informe um numero: "))
n2 = parseFloat(prompt("Informe um segundo numero: "))

if(n1 > n2) {
    alert("O numero " + n1 + " é maior que " + n2)
} else if (n2 > n1) {
    alert("O numero " + n2 + " é maior que " + n1)
} else {
    alert("Os numeros sao iguais")
}