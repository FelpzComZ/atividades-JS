var n1, n2, n

n1 = parseFloat(prompt("Informe um numero: "))
n2 = parseFloat(prompt("Informe um segundo numero: "))

n = parseInt(prompt("Informe qual opração:\n1 - Somar\n2 - Subtrair\n3 - Multiplicar\n4 - Divisão"))

switch (n) {
    case 1:
        alert("A soma dos numeros: " + (n1 + n2))
        break;
    case 2:
        alert("A subtracao dos numeros: " + (n1 - n2))
        break;
    case 3:
        alert("A multiplicação dos numeros: " + (n1 * n2))
        break;
    case 4:
        alert("A divisão dos numeros: " + (n1 / n2))
        break;
    default:
        alert("Opção inválida.")
        break;
}