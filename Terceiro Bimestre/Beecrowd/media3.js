var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [nota1, nota2, nota3, nota4] = lines.shift().split(' ').map(parseFloat);
var notaExame = parseFloat(lines.shift());

var media = (nota1 * 2 + nota2 * 3 + nota3 * 4 + nota4 * 1) / 10;
console.log("Media: " + media.toFixed(1));

if (media >= 7.0) {
    console.log("Aluno aprovado.");
} else if (media < 5.0) {
    console.log("Aluno reprovado.");
} else {
    console.log("Aluno em exame.");
    console.log("Nota do exame: " + notaExame.toFixed(1));
    
    var mediaFinal = (media + notaExame) / 2;
    if (mediaFinal >= 5.0) {
        console.log("Aluno aprovado.");
    } else {
        console.log("Aluno reprovado.");
    }
    
    console.log("Media final: " + mediaFinal.toFixed(1));
}
