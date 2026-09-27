var n1, n2, n3

n1 = parseFloat(prompt("Informe o primerio numero: "))
n2 = parseFloat(prompt("Informe o segundo numero: "))
n3 = parseFloat(prompt("Informe o tercerio numero: "))

if (n1 > n2 && n1 > n3) {
    alert("O primeiro numero é o maior")
} else if (n2 > n3) {
    alert("O segundo numero é o maior")
} else if (n3 > n2) {
    alert("O terceiro numero é o maior")
} else {
    alert("Os 3 numeros sao iguais")
}