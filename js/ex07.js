var idade

idade = parseInt(prompt("Informe sua idade: "))

if (idade >= 18  && idade <= 120) {
    alert("Maior de idade")
} else if(idade >= 0 && idade < 18) {
    alert("Menor de idade")
} else {
    alert("informe um valor valido!")
}