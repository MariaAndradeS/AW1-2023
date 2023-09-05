// 2. Crie uma função soma(x, y) que receba dois números como parâmetros e retorne sua soma.
function soma(x, y) {
    soma = x + y;
    return soma;
}
console.log(soma(503, 507))

// 3. Crie uma função hora() que retorne o horário atual do sistema no formato horas:minutos:segundos.
function hora() {
    const agora = new Date();
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');
    const horarioFormatado = `${horas}:${minutos}:${segundos}`;
    return horarioFormatado;
}
const horarioAtual = hora();
console.log("Horário atual:", horarioAtual);
  
// 5. Crie uma função quadrado(num) que receba um número como parâmetro e retorne o seu quadrado.
function quadrado(num) {
    return num ** 2;
}
console.log(quadrado(300));

// 6. Crie uma função cubo(num) que receba um número como parâmetro e retorne o seu cubo.
function cubo(num) {
    return num ** 3;
}
console.log(cubo(300));

// 7. Crie uma função potencia(num, expoente) que receba como parâmetros um número (num) e um expoente, e retorne a potenciação/exponenciação de num elevado a expoente.
function potencia(num, expoente) {
    return num ** expoente;
}
console.log(potencia(100, 5));

// 8. Crie uma função recursiva potencia(num, expoente) que receba como parâmetros um número (num) e um expoente, e retorne a potenciação/exponenciação de num elevado a expoente. Nesta função não são permitidas estruturas de repetição.
function potencia(num, expoente) {
    if (expoente === 0) { 
        return 1;
    } else {
        return num * potencia(num, expoente - 1);
    }
}
console.log(potencia(2, 3));

// 9. Crie uma função imc(peso, altura) que receba os parâmetros peso e altura, e retorne o Índice de Massa Corporal resultante.
function imc(peso, altura) {
    return peso / (altura ** 2);
}
console.log(imc(55, 1.71));

// 10. Crie uma função calculaAreaQuadrado(lado) que calcule e retorne a área de um quadrado com base na medida de seu lado.
function calculaAreaQuadrado(lado) {
    return lado * lado;
}
console.log(calculaAreaQuadrado(40));