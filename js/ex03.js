var n1, n2, n3, media

n1 = parseFloat(prompt("Informe a primeira nota: "))
n2 = parseFloat(prompt("Informe a segunda nota: "))
n3 = parseFloat(prompt("Informe a terceira nota: "))

media = (n1 + n2 + n3) / 3

alert("A média das notas: " + media.toFixed(2))