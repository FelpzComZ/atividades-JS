var idade, n

idade = parseInt(prompt("Informe sua idade: "))

n = parseInt(prompt("informe qual deseja:\n1 - Filme livre\n2 - Filme com classificação de 12 anos\n3 - Filme com classificação de 16 anos\n4 - Filme com classificação de 18 anos"))

switch (n) {
    case 1:
        alert("Voce pode assistir.")
        break;
    case 2:
        if (idade < 12) {
            alert("Voce nao pode assistir.")
        } else {
            alert("Voce pode assitir.")
        }
        break;
    case 3:
        if (idade < 16) {
            alert("Voce nao pode assistir.")
        } else {
            alert("Voce pode assitir.")
        }
        break;
    case 4:
        if (idade < 18) {
            alert("Voce nao pode assistir.")
        } else {
            alert("Voce pode assitir.")
        }
        break;
    default:
        alert("Opção inválida.")
        break;
}