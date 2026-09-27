var p, a, IMC

p = parseFloat(prompt("Infome seu peso: "))
a = parseFloat(prompt("Infome sua altura: "))

IMC = p / (a * a)

if (IMC < 18.5) {
    alert("Abaixo do peso.")
} else if (IMC >= 18.5 && IMC < 25) {
    alert("Peso adequado.")
} else if (IMC >= 25 && IMC < 30) {
    alert("Sobrepeso.")
} else {
    alert("Obesidade.")
}