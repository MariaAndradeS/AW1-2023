var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [A, B, C] = lines.shift().split(' ').map(parseFloat);

var sortedValues = [A, B, C].sort((a, b) => b - a);

A = sortedValues[0];
B = sortedValues[1];
C = sortedValues[2];

if (A >= B + C) {
    console.log("NAO FORMA TRIANGULO");
} else if (A * A === B * B + C * C) {
    console.log("TRIANGULO RETANGULO");
} else if (A * A > B * B + C * C) {
    console.log("TRIANGULO OBTUSANGULO");
} else if (A * A < B * B + C * C) {
    console.log("TRIANGULO ACUTANGULO");
}

if (A === B && B === C) {
    console.log("TRIANGULO EQUILATERO");
} else if (A === B || B === C || A === C) {
    console.log("TRIANGULO ISOSCELES");
}
