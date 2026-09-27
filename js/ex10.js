var nota1, nota2, media

nota1 = parseFloat(prompt("Informe a primeira nota: "))
nota2 = parseFloat(prompt("Informe a segunda nota: "))

media = (nota1 + nota2) / 2

if (media >= 7 && media <= 10) {
    alert("Aprovado")
} else if (media >= 4 && media < 7) {
    alert("Recuperação")
} else if (media >= 0 && media < 4) {
    alert("Reprovado")
} else {
    alert("Informe valores validos!")
}